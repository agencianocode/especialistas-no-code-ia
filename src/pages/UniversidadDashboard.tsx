import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Play, 
  Clock, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Search,
  Home,
  GraduationCap,
  FileText,
  Users,
  Calendar,
  Settings,
  CheckCircle,
  Award,
  TrendingUp,
  Code,
  Megaphone,
  Building,
  PieChart,
  Briefcase,
  DollarSign,
  MoreHorizontal
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UniversidadDashboard() {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  const sidebarItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'courses', icon: GraduationCap, label: 'Courses' },
    { id: 'guides', icon: FileText, label: 'Guides' },
    { id: 'workshops', icon: Users, label: 'Workshops' },
    { id: 'events', icon: Calendar, label: 'Events' },
    { id: 'community', icon: Users, label: 'Community' },
    { id: 'perks', icon: Star, label: 'Perks' },
    { id: 'settings', icon: Settings, label: 'Get started' }
  ];

  const handleSidebarClick = (itemId: string) => {
    setActiveSection(itemId);
    if (itemId === 'courses') {
      navigate('/universidad/cursos');
    } else if (itemId === 'guides') {
      navigate('/universidad/guias');
    }
  };

  const continueCard = {
    type: "Guide",
    title: "How to run ChatGPT locally on your computer",
    tags: ["General", "Business operations", "Legal", "Finance"],
    progress: 45
  };

  const guideRecommendations = [
    {
      id: 1,
      title: "Create the most realistic speech with our new voice cloning tutorial",
      category: "Beginner",
      tags: ["Data analysis", "Consulting"],
      image: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Transform your documents into stunning presentations",
      category: "Beginner", 
      tags: ["Marketing", "Business operations", "Project management"],
      image: "bg-gradient-to-br from-pink-400 to-purple-600"
    },
    {
      id: 3,
      title: "Visualize data with AI-powered charts",
      category: "Beginner",
      tags: ["Data analysis", "Consulting"],
      image: "bg-gradient-to-br from-teal-400 to-cyan-600"
    },
    {
      id: 4,
      title: "Generate charts from your data with ChatGPT",
      category: "Beginner",
      tags: ["Data analysis", "Consulting", "Finance", "Business operations"],
      image: "bg-gradient-to-br from-gray-400 to-gray-600"
    }
  ];

  const courseRecommendation = {
    title: "AI for Consulting",
    subtitle: "Learn the fundamentals of leveraging AI for Consulting",
    category: "Consulting",
    type: "Certificate"
  };

  const allTopics = [
    { icon: Users, name: "General", color: "bg-blue-500" },
    { icon: Code, name: "Coding", color: "bg-green-500" },
    { icon: Megaphone, name: "Marketing", color: "bg-red-500" },
    { icon: Users, name: "Content creator", color: "bg-orange-500" },
    { icon: GraduationCap, name: "Educator", color: "bg-purple-500" },
    { icon: Building, name: "Business operations", color: "bg-blue-600" },
    { icon: TrendingUp, name: "Sales", color: "bg-yellow-500" },
    { icon: DollarSign, name: "Finance", color: "bg-green-600" },
    { icon: Users, name: "Consulting", color: "bg-indigo-500" },
    { icon: PieChart, name: "Data analysis", color: "bg-cyan-500" },
    { icon: Briefcase, name: "Project management", color: "bg-gray-500" },
    { icon: MoreHorizontal, name: "Others", color: "bg-slate-500" }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-neutral-800 border-r border-neutral-700">
        {/* Logo */}
        <div className="p-6 border-b border-neutral-700">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-3">
              <span className="text-neutral-900 font-bold text-sm">TR</span>
            </div>
            <div>
              <div className="text-sm font-semibold">The Rundown</div>
              <div className="text-xs text-purple-400">University</div>
            </div>
            <Badge variant="secondary" className="ml-2 text-xs bg-neutral-600 text-white">
              BETA
            </Badge>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-neutral-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-neutral-700 border border-neutral-600 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="bg-neutral-600 px-2 py-1 rounded text-xs text-neutral-300">⌘K</kbd>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSidebarClick(item.id)}
              className={`w-full flex items-center px-3 py-2 mb-1 text-sm rounded-lg transition-colors ${
                activeSection === item.id 
                  ? 'bg-neutral-700 text-white' 
                  : 'text-neutral-300 hover:bg-neutral-700 hover:text-white'
              }`}
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom User Section */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center p-3 bg-neutral-700 rounded-lg">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-semibold text-sm">F</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Fabian</div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                <div className="text-xs text-neutral-300">1</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="p-1">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Continue where you left off */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Continue where you left off</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-neutral-400">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-neutral-400">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <Card className="bg-neutral-800 border-neutral-700 p-6">
            <div className="flex gap-4">
              <div className="w-32 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center relative">
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 text-cyan-600" />
                </div>
              </div>
              <div className="flex-1">
                <Badge variant="secondary" className="mb-2 bg-neutral-600 text-white text-xs">
                  {continueCard.type}
                </Badge>
                <h3 className="text-lg font-semibold mb-2">{continueCard.title}</h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {continueCard.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-neutral-400">
                      {tag}{index < continueCard.tags.length - 1 ? ' | ' : ''}
                    </span>
                  ))}
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full" 
                    style={{ width: `${continueCard.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Guide recommendations */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold">Guide recommendations</h2>
              <p className="text-neutral-400 text-sm mt-1">
                Based on your survey response and platform history, we've curated the top AI guides for consultants. You can always change your focus in your profile.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-neutral-400">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-neutral-400">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {guideRecommendations.map((guide) => (
              <Card key={guide.id} className="bg-neutral-800 border-neutral-700 p-4 hover:bg-neutral-750 transition-colors cursor-pointer">
                <div className={`${guide.image} h-24 rounded-lg mb-4 relative`}>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-neutral-800/80 text-white text-xs">
                      {guide.id}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-3 h-3 text-neutral-800" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm mb-2 leading-tight">{guide.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {guide.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-neutral-400">
                      {tag}{index < guide.tags.length - 1 ? ' | ' : ''}
                    </span>
                  ))}
                </div>
                <div className="mt-2">
                  <Badge variant="outline" className="border-neutral-600 text-neutral-300 text-xs">
                    {guide.category}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Course recommendations */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Course recommendations</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-neutral-400">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-neutral-400">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <Card className="bg-neutral-800 border-neutral-700 p-6 max-w-sm">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-lg mb-4 text-center relative">
              <div className="absolute top-2 left-2">
                <Badge variant="secondary" className="bg-neutral-800/80 text-white text-xs">
                  1
                </Badge>
              </div>
              <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <Award className="w-8 h-8 text-white mx-auto mb-2" />
              <div className="text-white font-bold">{courseRecommendation.title}</div>
              <div className="text-purple-100 text-sm">{courseRecommendation.subtitle}</div>
            </div>
            <h3 className="font-semibold mb-2">{courseRecommendation.title}</h3>
            <div className="text-neutral-400 text-sm mb-3">
              Certificate
            </div>
            <div className="text-neutral-400 text-sm">
              {courseRecommendation.category}
            </div>
            <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
              Get Certificate
            </Button>
          </Card>
        </section>

        {/* All topics */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">All topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allTopics.map((topic, index) => (
              <Card key={index} className="bg-neutral-800 border-neutral-700 p-4 hover:bg-neutral-750 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <div className={`w-8 h-8 ${topic.color} rounded flex items-center justify-center mr-3`}>
                    <topic.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{topic.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}