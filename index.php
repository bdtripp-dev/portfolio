<?php
    $env_name = getenv('ENV_NAME');
    $prefix = $env_name == 'prod' ? '' : $env_name . '-';
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Test App 1</title>
    </head>
    <body>
        <h1>Hello World! Test</h1>
        <a href="<?= "https://{$prefix}my-test-app2.bdtripp.com/" ?>">My Test App 2</a>
    </body>
</html>