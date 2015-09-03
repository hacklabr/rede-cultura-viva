<!DOCTYPE html>
<html>
    <head>
        <title><?php $this->getTitle(isset($entity) ? $entity : null) ?></title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="meta desc">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php $this->head(isset($entity) ? $entity : null); ?>
    </head>
<body <?php $this->bodyProperties() ?> >
    <?php $this->bodyBegin(); ?>

    <div id="barra-brasil" style="background:#7F7F7F; height: 20px; padding:0 0 0 10px;display:block;">
        <ul id="menu-barra-temp" style="list-style:none;">
            <li style="display:inline; float:left;padding-right:10px; margin-right:10px; border-right:1px solid #EDEDED"><a href="http://brasil.gov.br" style="font-family:sans,sans-serif; text-decoration:none; color:white;">Portal do Governo Brasileiro</a></li>&#x9;&#x9;
            <li><a style="font-family:sans,sans-serif; text-decoration:none; color:white;" href="http://epwg.governoeletronico.gov.br/barra/atualize.html">Atualize sua Barra de Governo</a></li>
        </ul>
    </div>
    <div class="box-menu">
        <div class="row">
            <div class="small-1 columns"><a href="#" class="action-secondary-menu"><i class="icon-menu"></i></a></div>
            <div class="small-14 columns">
				<h1 class="logo"><a href="#"><img src="<?php $this->asset('img/logo-cultura-viva.svg'); ?>"></a></h1>
            </div>
        <div class="small-9 columns">

        <?php if ($app->auth->isUserAuthenticated()): ?>
            <ul class="inline-list main-menu">
                <?php if ($app->user->profile->avatar): ?>
                    <img src="<?php echo $app->user->profile->avatar->transform('avatarSmall')->url; ?>" />
                <?php else: ?>
                    <img src="<?php $this->asset('img/avatar.png'); ?>" />
                <?php endif; ?>
                    <li>
                        <?php if($app->getConfig('auth.provider') === 'Fake'): ?>
                            <a href="<?php echo $app->createUrl('auth'); ?>">Trocar Usuário</a>
                            <?php if(!empty($fake_options)) echo $fake_options; ?>
                        <?php endif; ?>
                        <a href="<?php echo $app->createUrl('auth', 'logout'); ?>">Sair</a>
                    </li>


                <li><a href="./criterios.html"><i class="icon-user"></i><span>Entrar</span></a></li>
                <li><a href="#"><i class="icon-map"></i><span>Mapa</span></a></li>
                <li><a href="#"><i class="icon-calendar"></i><span>Eventos</span></a></li>
            </ul>

        <?php else: ?>
            <li class="login">
                <a href="<?php echo $app->createUrl('panel') ?>">
                    <div class="icon icon-login"></div>
                    <div class="menu-item-label">Entrar</div>
                </a>
                <?php if(!empty($fake_options)): ?>
                    <ul class="submenu" style="margin: 2px 0 0 -12px"><li><?php echo str_ireplace("Login\n        </a>", 'Login</a> |', $fake_options) ?></li></ul>
                <?php endif; ?>
            </li>
            <!--.login-->
        <?php endif; ?>
        </div>
    </div>
</div>