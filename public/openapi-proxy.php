<?php

$const = $_GET['path'];
$params = array_filter($_GET ?: [], function ($key) {
    return $key !== 'path';
}, ARRAY_FILTER_USE_KEY);

$url = "https://api-invest.tinkoff.ru/openapi" . $_GET['path'] . '?' . http_build_query($params);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $_COOKIE['tinkoffAuthToken'],
));

header('Content-type: application/json');
echo curl_exec($ch);