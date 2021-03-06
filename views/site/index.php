<?php
$this->layout = 'home';
?>

<div class="box-slideshow">
    <div class="content">
        <img src="<?php $this->asset('img/logo-cultura-viva-sombra.svg'); ?>">
	      <p>Como faço para me autodeclarar um Ponto de Cultura? Insira seus dados no Cadastro e a partir de uma análise simplificada a ser feita pelo Ministério da Cultura, a entidade ou coletivo passará fazer parte da Rede Cultura Viva, um ambiente de trocas de experiências, serviços, conhecimentos e informações. E se você já é Ponto de Cultura entre na rede e faça parte do Circuito Cultura Viva.</p>
        <?php if ($app->auth->isUserAuthenticated()): ?>
            <a href="<?php echo $app->createUrl('ponto_cultura'); ?>" class="button">continuar cadastro</a>
		    <?php else: ?>
		        <a href="<?php echo $app->createUrl('auth'); ?>" class="button">entrar na rede</a>
		    <?php endif; ?>
    </div>
    <ul class="cb-slideshow">
        <li><span>Image 01</span></li>
        <li><span>Image 02</span></li>
        <li><span>Image 03</span></li>
        <li><span>Image 04</span></li>
        <li><span>Image 05</span></li>
    </ul>
</div>
<div class="featured-text container">
    <h3>SOMOS TODOS PONTOS DE CULTURA</h3>
    <p>Desde 23 de julho de 2014, com a sanção da Lei Cultura Viva (Lei 13.018/2014), o Programa Cultura Viva e os Pontos de Cultura tornaram-se Política de Estado. Além de garantir a continuidade do Programa, a Lei simplifica e desburocratiza os processos de prestação de contas e o repasse de recursos para as organizações da sociedade civil. Uma grande vitória para o movimento cultural brasileiro!</p><a href="<?php echo $app->createUrl('site', 'page', array('leia-mais')) ?>" class="button">leia mais</a>
</div>
<div class="container">
    <div class="tip-subject"><img src="<?php $this->asset('img/icones-home/o-que-e-ponto-cultura.svg'); ?>">
        <h3>O QUE É PONTO DE CULTURA?</h3>
        <p>Pontos de Cultura são grupos, coletivos e entidades de natureza ou finalidade cultural, que desenvolvem e articulam atividades culturais em suas comunidades e redes.</p>
    </div>
    <div class="tip-subject"><img src="<?php $this->asset('img/icones-home/porque-ser-um.svg'); ?>">
        <h3>POR QUE SER UM PONTO DE CULTURA?</h3>
        <p>O reconhecimento como Ponto de Cultura garante uma chancela institucional, que pode ser importante para a obtenção de apoios e parcerias.</p>
    </div>
    <div class="tip-subject"><img src="<?php $this->asset('img/icones-home/o-que-ganho.svg'); ?>">
        <h3>O QUE EU GANHO COM ISSO?</h3>
        <p>A partir deste mapeamento dos conhecimentos e capacidades da rede será possível organizar circuitos de formação e intercâmbios virtuais e presenciais.</p>
    </div>
    <div class="tip-subject"><img src="<?php $this->asset('img/icones-home/o-que-e-cultura-viva.svg'); ?>">
        <h3>O QUE É O CULTURA VIVA?</h3>
        <p>Iniciativas ligadas à cultura de base comunitária, Indígenas, Quilombolas, de Matriz Africana, economia solidária, produção cultural, urbana e periférica, cultura digital, entre outras.</p>
    </div>
</div>
