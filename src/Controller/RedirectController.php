<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Link;


class RedirectController extends AbstractController
{
    /*
    * Route('/{short}', name: 'redirect_link', methods: 'GET')
    * Redirect To Origin Link
    * Redirect To Landing Page
    */
    public function start(string $short, ManagerRegistry $doctrine): RedirectResponse {
        $repository = $doctrine->getRepository(Link::class);
        $link = $repository->findOneBy(['short' => $short]);
        if(!$link) {
            return $this->redirectToRoute('landing_page', [], 301);
        }
        else {
            return $this->redirect($link->getOrigin(),  301);
        }
    }

}
