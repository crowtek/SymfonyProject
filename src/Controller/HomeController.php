<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        $title = "SYMFONY";

        return $this->render('home/index.html.twig', [
            'title' => $title,
        ]);
    }

    #[Route('/info', name: 'info')]
    public function info(): Response
    {
        return $this->render('home/info.html.twig');
    }

    #[Route('/apiPage', name: 'apiPage')]
    public function apiPage(): Response
    {
        return $this->render('home/api.html.twig');
    }
}
