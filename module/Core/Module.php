<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2014 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Core;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;

class Module
{
public function onBootstrap(MvcEvent $e)
    {
        /* @var $eventManager EventManager */
		$eventManager = $e->getApplication()->getEventManager();
        
		/* @var $sharedManager SharedEventManager */
		$sharedManager = $eventManager->getSharedManager();
        
		/* @var $serviceManager ServiceManager */
		$serviceManager = $e->getApplication()->getServiceManager();
		
		if($e->getRequest() instanceof ConsoleRequest == false)
		{
			$eventManager->attach(\Zend\Mvc\MvcEvent::EVENT_DISPATCH_ERROR, array($this, 'onDispatchError'));
			$eventManager->attach(\Zend\Mvc\MvcEvent::EVENT_RENDER_ERROR, array($this, 'onRenderError'));
		}
		
		$moduleRouteListener = new ModuleRouteListener();
		$moduleRouteListener->attach($eventManager);
		
    }

    public function onDispatchError(MvcEvent $e) 
    {
        /* @var $serviceManager ServiceManager */
        $serviceManager = $e->getApplication()->getServiceManager();
        
        /* @var $eventManager EventManager */
        $eventManager = $e->getApplication()->getEventManager();
       
//         $renderErrorListener = $serviceManager->get("RenderErrorListener");
        
//         $variables = array();
//         $eventManager->trigger("onDispatchError", $e, $variables);
    	$viewModel = $e->getViewModel();
    	$viewModel->setTemplate('layout/noMenuLayout');
    }
    
    public function onRenderError(MvcEvent $e) 
    {
        /* @var $serviceManager ServiceManager */
//         $serviceManager = $e->getApplication()->getServiceManager();
        
//         /* @var $eventManager EventManager */
//         $eventManager = $e->getApplication()->getEventManager();
        
//         $renderErrorListener = $serviceManager->get("RenderErrorListener");
        
//         $variables = array();
//         $eventManager->trigger("onRenderError", $e, $variables);
        
    	$viewModel = $e->getViewModel();
    	$viewModel->setTemplate('layout/noMenuLayout');
    }
    
    public function onRouteError(MvcEvent $e) 
    {
//     	/* @var $serviceManager ServiceManager */
//     	$serviceManager = $e->getApplication()->getServiceManager();
    
//     	/* @var $eventManager EventManager */
//     	$eventManager = $e->getApplication()->getEventManager();
    
//     	$renderErrorListener = $serviceManager->get("RenderErrorListener");
//     	$variables = array();
//     	$eventManager->trigger("onRouteError", $e, $variables);
    
    	$viewModel = $e->getViewModel();
    	$viewModel->setTemplate('layout/noMenuLayout');
    }
    
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }
    
    public function getServiceConfig()
    {
    	return array(
    			'factories' => array(
    					'mail.transport' => function (ServiceManager $serviceManager) {
    						$config = $serviceManager->get('Config');
    						$transport = new Smtp();
    						$transport->setOptions(new SmtpOptions($config['mail']['transport']['options']));
    
    						return $transport;
    					},
    					'Zend\Log\FirePhp' => function($sm) {
                            $writer = new \Zend\Log\Writer\FirePhp();
                            $logger = new \Zend\Log\Logger();
                            $logger->addWriter($writer);
                            return $logger;
                        },
    			),
    	);
    }
    
    public function getViewHelperConfig()
    {
        
    	return array(
    			'factories' => array(
    					'absoluteUrl' => function($sm) {
    						$locator = $sm->getServiceLocator(); // $sm is the view helper manager, so we need to fetch the main service manager
    						return new AbsoluteUrl($locator->get('Request'));
    					},
    					'i18n' => function($sm) {
    						$translator = $sm->getServiceLocator()->get("MvcTranslator");
    						/* @var $translator Translator */
//     						return $translator;
    						return new I18n($translator);
    					},
    					
    			),
    	);
    
    }
}
