<?php
$config = include 'conf-base.php';

return array_merge($config,
  [
    'app.siteName' => 'Nome do site',
    'app.siteDescription' => 'Descrição do site',

    'namespaces' => array_merge( $config['namespaces'], ['CulturaViva' => BASE_PATH . '/../../rede-cultura-viva/']),
    'themes.active' => 'CulturaViva',

    'app.useAssetsUrlCache' => false,

    // development, staging, production
    'app.mode' => 'development',
    'doctrine.isDev' => true,
    'slim.debug' => true,

    'auth.provider' => 'Fake',

    'doctrine.database' => [
      'dbname'    => 'mapas',
      'user'      => 'mapas',
      'host'      => '',
    ],
  ]
);
