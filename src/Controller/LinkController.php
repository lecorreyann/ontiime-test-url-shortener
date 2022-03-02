<?php

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\ConstraintViolationListInterface;
use App\Entity\Link;
use App\Service\RandomShort;


class LinkController extends AbstractFOSRestController
{
    /*
    * Route('/api/links', name: 'create_link',  methods: 'POST')
    * Create A New Shorten Link
    */
    #[ParamConverter('link', class:'App\Entity\Link', converter:'fos_rest.request_body')]
    public function createLink(Link $link, ConstraintViolationListInterface $validationErrors, ManagerRegistry $doctrine, RandomShort $randomShort): Response
    {
        // verif link
        if(count($validationErrors) > 0) {
            $view = $this->view($validationErrors,  Response::HTTP_BAD_REQUEST);
        }
        else {
            // persist link
            $link->setShort($randomShort->generate());
            // check protocol
            if (!preg_match("~^(?:f|ht)tps?://~i", $link->getOrigin())) {
                $link->setOrigin("http://" . $link->getOrigin());
            }
            $doctrine->getManager()->persist($link);
            $doctrine->getManager()->flush();
            $view = $this->view($link,  Response::HTTP_OK);
        }
        return $this->handleView($view);
    }

    /*
    * Route('/api/links', name: 'list_link',  methods: 'GET')
    * List Links
    */
    public function listLink(ManagerRegistry $doctrine): Response {
         // Return Links
         $repository = $doctrine->getRepository(Link::class);
         $view = $this->view($repository->findBy([], ['id' => 'DESC']), 200);
         return $this->handleView($view);
    }




}
