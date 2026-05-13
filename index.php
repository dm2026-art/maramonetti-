<?php

define('KIRBY_HELPER_DUMP', false);

require __DIR__ . '/kirby/bootstrap.php';

echo (new Kirby)->render();
