<?php
include_once('db_conn.php');

function getFilter($f)
{
	if (! $f['field']) return false;
	
	$option = (bool) $f['option'];
	
	global $con;
	
	if (!$f['value'])	$safe_val = false;
	else $safe_val = mysqli_real_escape_string($con, $f['value']);
	
	switch ($f['condition'])
	{
		case 'eq':
			if ($safe_val === false) return false;
			return $f['field'] . ' = \'' . $safe_val . '\'';
			break;
		case 'ne':
			if ($safe_val === false) return false;
			return $f['field'] . ' != \'' . $safe_val . '\'';
			break;
		case 'gt':
			if ($safe_val === false) return false;
			return $f['field'] . ' > \'' . $safe_val . '\'';
			break;
		case 'ge':
			if ($safe_val === false) return false;
			return $f['field'] . ' >= \'' . $safe_val . '\'';
			break;
		case 'lt':
			if ($safe_val === false) return false;
			return $f['field'] . ' < \'' . $safe_val . '\'';
			break;
		case 'le':
			if ($safe_val === false) return false;
			return $f['field'] . ' <= \'' . $safe_val . '\'';
			break;
		case 'like_l':
			if ($safe_val === false) return false;
			if ($option)
			{
				$safe_val = mysqli_real_escape_string($con, strtoupper($f['value']));
				return 'upper(' . $f['field'] . ') LIKE \'%' . $safe_val . '\'';
			}
			else
			{
				return $f['field'] . ' LIKE \'%' . $safe_val . '\'';
			}
			break;
		case 'like_r':
			if ($safe_val === false) return false;
			if ($option)
			{
				$safe_val = mysqli_real_escape_string($con, strtoupper($f['value']));
				return 'upper(' . $f['field'] . ') LIKE \'' . $safe_val . '%\'';
			}
			else
			{
				return $f['field'] . ' LIKE \'' . $safe_val . '%\'';
			}
			break;
		case 'like_b':
			if ($safe_val === false) return false;
			if ($option)
			{
				$safe_val = mysqli_real_escape_string($con, strtoupper($f['value']));
				return 'upper(' . $f['field'] . ') LIKE \'%' . $safe_val . '%\'';
			}
			else
			{
				return $f['field'] . ' LIKE \'%' . $safe_val . '%\'';
			}
			break;
		case 'is_null':
			return $f['field'] . ' is null';
			break;
		case 'is_not_null':
			return $f['field'] . ' is not null';
			break;
		default:
			if ($safe_val === false) return false;
			return $f['field'] . ' = \'' . $safe_val . '\'';
	}
}

function getWhere($where)
{
	$clauses = array();
	$sql = '';
	
	if ($where)
		foreach ($where as $w)
		{
			$clause = getFilter($w);
			if ($clause) $clauses[] = $clause;
		}

	if ($clauses) $sql = ' where ' . implode(' AND ', $clauses);
	
	return $sql;
}

function getOrderBy($orderby)
{
	$sql = '';
	$op = '';
	
	if ($orderby)
	{
		$sql .= " ORDER BY ";
		foreach ($orderby as $s)
		{
			$sql .= $op . $s['field'] . ' ' . $s['type'];
			$op = ', ';
		}
	}
	
	return $sql;
}

function getLimit($limit, $offset)
{
	$sql = false;
	
	if ($limit)
	{
		if ($offset < 0) $offset = 0;
		$sql .= " LIMIT " . $offset . ", " . $limit;
	}
	
	return $sql;
}

function fetchRowCount($con, $sql)
{
	//print($sql);
	$result = mysqli_query($con, $sql);
	if (! $result) return false;
	$row = array();
	$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
	return $row['rowcount'];
}

function fetchRows($con, $sql)
{
	//print($sql);
	$result = mysqli_query($con, $sql);
	
	if (! $result) return false;
	
	$records = array();
	
	while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
		$records[] = $row;
	
	return $records;
}

function getRecords($con, $where, $orderby, $limit, $offset, $pagesize, &$rowcount)
{
	$sql_where = getWhere($where);
	$sql_orderby = getOrderBy($orderby, $count);
	$sql_limit = getLimit($limit, 0);
	$sql_page = getLimit($pagesize, $offset);
		
	if ($limit)
	{
		if ($pagesize) 
		{
			$sql = "SELECT * FROM phones " . $sql_where . $sql_orderby . $sql_limit;
			$sql = "select * from ( " . $sql . " ) a " . $sql_page;
			$records = fetchRows($con, $sql);
			if (! $records) return false;
			
			$rc_sql = "SELECT 1 FROM phones " . $sql_where . $sql_limit;
			$rc_sql = "select count(*) AS rowcount from ( " . $rc_sql . " ) rc";
			$rowcount = fetchRowCount($con, $rc_sql);
			if (! $rowcount) return false;
			return $records;
		}
		
		$sql = "SELECT * FROM phones " . $sql_where . $sql_orderby . $sql_limit;
		$records = fetchRows($con, $sql);
		$rowcount = count($records);
		return $records;
	}
	
	if ($pagesize) 
	{
		$sql = "SELECT * FROM phones " . $sql_where . $sql_orderby . $sql_page;
		$records = fetchRows($con, $sql);
		if (! $records) return false;
		
		$rc_sql = "SELECT 1 FROM phones " . $sql_where;
		$rc_sql = "select count(*) AS rowcount from ( " . $rc_sql . " ) rc";
		$rowcount = fetchRowCount($con, $rc_sql);
		if (! $rowcount) return false;
		return $records;
	}
	
	$sql = "SELECT * FROM phones " . $sql_where . $sql_orderby;
	$records = fetchRows($con, $sql);
	if (! $records) return false;
	$rowcount = count($records);
	return $records;
}

//print_r($_REQUEST);
$where = $_REQUEST['where']; 
$orderby = $_REQUEST['orderby']; 
$limit = $_REQUEST['limit']; 
$offset = $_REQUEST['offset']; 
$pagesize = $_REQUEST['pagesize']; 
$rowcount = 0;

//Open database connection: defined in db_conn.php
$con = mysqli_connect(DBHOST, DBUSER, DBUSERPWD, DBNAME);

//JSON must be UTF8
mysqli_set_charset($con,"utf8");

//Get records from database
$records = getRecords($con, $where, $orderby, $limit, $offset, $pagesize, $rowcount);

//Close database connection
mysqli_close($con);

//Return result to client
$response = array(); 
$response['result'] = 'OK';
$response['where'] = $where;
$response['orderby'] = $orderby;
$response['limit'] = $limit;
$response['offset'] = $offset;
$response['pagesize'] = $pagesize;
$response['records'] = $records;
$response['rowcount'] = $rowcount;

header("Content-type: application/json; charset=utf-8");
print json_encode($response);
	
?>