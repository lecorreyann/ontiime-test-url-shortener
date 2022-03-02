<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class LandingPageController extends AbstractController
{
    /*
    * Route('/', name: 'landing_page', methods: 'GET')
    * display landing page (single one page for ontiime test)
    */
    public function index(): Response
    {
        // User arrives on the application, there is nothing special to do except display the view
        return $this->render('landing_page/index.html.twig');
    }
}
