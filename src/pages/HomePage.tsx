import React, { useState } from 'react'
import { Link } from 'react-router'

import { Building2, CheckCircle, ChevronRight, Clock, Filter, GraduationCap, Heart, MapPin, MessageSquare, School, Search, Star, Users, Zap } from 'lucide-react'

import { internshipOffers } from '../data/DropdownData'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import UserMenu from './UserMenu'


const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("")

  return (
     <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-orange-500">Stage</span>
                <span className="text-primary-900">Richy48</span>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-500">
                Accueil
              </a>
              <a href="#offers" className="text-gray-700 hover:text-orange-500">
                Offres
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-500">
                À propos
              </a>
            </nav>
            <UserMenu /> 
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/slider.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-teal-600/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            CHERCHEZ
            <br />
            TROUVEZ <span className="text-orange-500">&</span>
            <br />
            <span className="text-orange-500">POSTULEZ</span>
          </h1>
          <p className="text-xl mb-8">Des centaines d'offres de stage vous attendent.</p>
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-lg px-8 py-3" asChild>
            <Link to="/login">Voir les offres</Link>
          </Button>
        </div>
      </section>

      {/* Search Section */}
      <section id="offers" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Trouvez votre stage idéal</h2>
            <p className="text-xl text-gray-600">
              Parcourez nos offres de stage et trouvez l'opportunité qui correspond à vos aspirations professionnelles.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Rechercher par titre, domaine ou entreprise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-4 text-lg border-2 border-gray-200 rounded-full"
                />
              </div>
              <Button className="bg-primary-500 hover:bg-primary-300 px-8 py-4 text-white rounded-full">
                <Filter className="w-5 h-5 mr-2" />
                Filtres
              </Button>
            </div>
          </div>

          {/* Internship Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipOffers.map((offer) => (
              <Card key={offer.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">{offer.category}</Badge>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl text-primary-500">{offer.title}</CardTitle>
                  <CardDescription className="text-gray-600">Entreprise: {offer.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {offer.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Durée: {offer.duration}
                    </div>
                  </div>
                  <Button className="w-full bg-primary-500 hover:bg-primary-300 text-white" asChild>
                    <Link to={`/offer/${offer.id}`}>
                      Voir les détails
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div
          className="relative bg-cover bg-center bg-no-repeat py-20"
          style={{ backgroundImage: "url('/slider-21.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-teal-600/90"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Qui sommes nous ?</h2>
            <p className="text-xl text-white mb-16 max-w-3xl mx-auto">
              StageRichy48 est la plateforme qui relie étudiants, entreprises et établissements pour des stages réussis.
              <br />
              Ensemble, faisons grandir les talents de demain.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                <GraduationCap className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                <h3 className="text-2xl font-bold mb-4">Étudiants</h3>
                <p className="text-white/90">
                  Consultez les offres disponibles, postulez en quelques clics et suivez facilement vos candidatures.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                <Building2 className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                <h3 className="text-2xl font-bold mb-4">Entreprise</h3>
                <p className="text-white/90">
                  Publiez vos offres de stage, gérez les candidatures et suivez l'avancement des stagiaires.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                <School className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                <h3 className="text-2xl font-bold mb-4">Établissements</h3>
                <p className="text-white/90">
                  Validez les conventions, suivez les stages en cours et communiquez avec tous les acteurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 bg-gray-50">
        <div
          className="relative bg-cover bg-center bg-no-repeat py-20"
          style={{ backgroundImage: "url('/images/process-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-white/95"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary-500 mb-16">Comment ça marche ?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Inscription & Profil</h3>
                  <p className="text-gray-600">
                    Les étudiants et entreprises créent leur compte et complètent leur profil.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Candidature aux Stages</h3>
                  <p className="text-gray-600">Les étudiants postulent aux offres après avoir complété leur profil.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Validation & Suivi du Stage</h3>
                  <p className="text-gray-600">
                    Les offres sont validées et un suivi est assuré tout au long du stage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Rapport & Certification</h3>
                  <p className="text-gray-600">Un rapport est généré à la fin, avec possibilité de certification.</p>
                </div>
              </div>
            </div>

            {/* Process Accelerated Card */}
            <div className="max-w-2xl mx-auto">
              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
                <CardContent className="p-8 text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Processus accéléré</h3>
                  <p className="text-lg">
                    Des démarches simplifiées pour gagner du temps et rester concentré sur l'essentiel.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-8">POURQUOI NOUS CHOISIR ?</h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-orange-500 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-primary-900 mb-2">Suivie des stages</h3>
                        <p className="text-gray-600">
                          Un suivi régulier de chaque étape du stage pour assurer votre réussite.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MessageSquare className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-primary-900 mb-2">Communication centralisée</h3>
                        <p className="text-gray-600">
                          La communication entre les utilisateurs via un système de notifications et d'échange de
                          documents, assurant une circulation d'information fluide et structurée.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Zap className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-primary-900 mb-2">Processus accéléré</h3>
                        <p className="text-gray-600">
                          Des démarches simplifiées pour gagner du temps et rester concentré sur l'essentiel.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-800 rounded-2xl p-8 text-white transform rotate-3 shadow-2xl">
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Rejoignez notre communauté</h3>
                <p className="text-lg mb-4">Plus de 10,000 étudiants et 500 entreprises nous font confiance.</p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                    <div className="w-8 h-8 bg-primary-200 rounded-full"></div>
                    <div className="w-8 h-8 bg-orange-200 rounded-full"></div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                    <span className="ml-2 text-sm">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-l from-[#2dd4bf]  to-[#1f2937] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-orange-500">Stage</span>Richy48
              </h3>
              <p className="text-primary-200">
                La plateforme qui connecte les talents de demain avec les opportunités d'aujourd'hui.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-primary-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Offres
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Pour les étudiants</h4>
              <ul className="space-y-2 text-primary-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Créer un profil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Rechercher un stage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mes candidatures
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Pour les entreprises</h4>
              <ul className="space-y-2 text-primary-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Publier une offre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Gérer les candidatures
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Suivi des stagiaires
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-200">
            <p>&copy; 2025 StageRichy48. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default HomePage