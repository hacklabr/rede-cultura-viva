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
    <div class="header-menu">
		<h1 class="logo"><a href="<?php echo $app->createUrl('site'); ?>"><img src="<?php $this->asset('img/logo-cultura-viva.svg'); ?>"></a></h1>
        <ul class="main-menu">
			<li><a href="#"><i class="icon-map"></i><span>Mapa</span></a></li>
			<li><a href="#"><i class="icon-calendar"></i><span>Eventos</span></a></li>
        <?php if ($app->auth->isUserAuthenticated()): ?>
			<?php if ($app->user->profile->avatar): ?>
				<li><img src="<?php echo $app->user->profile->avatar->transform('avatarSmall')->url; ?>" /></li>
			<?php else: ?>
			<li><!--i class="icon-user"></i--><span><?php echo $app->user->profile->name; ?></span>
			<?php endif; ?>
				<?php if($app->getConfig('auth.provider') === 'Fake'): ?>
					<!--a href="<?php echo $app->createUrl('auth'); ?>">Trocar Usuário</a-->
					<?php if(!empty($fake_options)) echo $fake_options; ?>
				<?php endif; ?>

				<a href="<?php echo $app->createUrl('auth', 'logout'); ?>">Sair</a></li>
			</li>
        <?php else: ?>
            <li class="login">
                <a href="<?php echo $app->createUrl('auth') ?>">
					<i class="icon-user"></i>
                    <span class="menu-item-label">Entrar</span>
                </a>
                <?php if(!empty($fake_options)): ?>
                    <ul class="submenu" style="margin: 2px 0 0 -12px"><li><?php echo str_ireplace("Login\n        </a>", 'Login</a> |', $fake_options) ?></li></ul>
                <?php endif; ?>
            </li>
            <!--.login-->
        <?php endif; ?>
		</ul>
	</div>