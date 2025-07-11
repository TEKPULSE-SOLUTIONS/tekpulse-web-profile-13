
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Filter } from 'lucide-react';

// Mock news articles data
const newsArticles = [
  {
    id: 1,
    title: "Transformative Blockchain Technology in the Cybersecurity Sector",
    slug: "blockchain-cybersecurity",
    summary: "Discover how blockchain is reshaping cybersecurity by decentralizing control, eliminating single points of failure, and empowering smart automated policies.",
    content: `
      <p>Blockchain technology is revolutionizing the cybersecurity landscape by introducing decentralized security models that eliminate traditional single points of failure.</p>
      
      <h2>Decentralized Security Architecture</h2>
      <p>Unlike conventional centralized systems, blockchain creates a distributed network where security is maintained across multiple nodes, making it virtually impossible for attackers to compromise the entire system.</p>
      
      <h2>Smart Contract Automation</h2>
      <p>Smart contracts enable automated security policies that execute without human intervention, reducing the risk of human error and ensuring consistent security protocols.</p>
      
      <h2>Immutable Audit Trails</h2>
      <p>Every transaction and access attempt is recorded on an immutable ledger, providing complete transparency and accountability for security events.</p>
      
      <h2>Zero-Trust Implementation</h2>
      <p>Blockchain naturally supports zero-trust security models by requiring verification for every transaction and access request, regardless of the source.</p>
    `,
    category: "Tech Insights",
    date: new Date().toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "TekPulse Solutions Launches Advanced ERP Suite",
    slug: "tekpulse-erp-launch",
    summary: "Our latest enterprise resource planning solution integrates AI-powered analytics with seamless workflow automation.",
    content: "Full content about the ERP launch...",
    category: "Product Launch",
    date: new Date(Date.now() - 86400000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Partnership with Leading Financial Institutions",
    slug: "financial-partnership",
    summary: "TekPulse Solutions announces strategic partnerships to deliver cutting-edge fintech solutions.",
    content: "Full content about partnerships...",
    category: "Partnership",
    date: new Date(Date.now() - 172800000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 4,
    title: "AI-Driven Analytics: The Future of Business Intelligence",
    slug: "ai-business-intelligence",
    summary: "Exploring how artificial intelligence is transforming data analytics and business decision-making processes.",
    content: "Full content about AI analytics...",
    category: "Tech Insights",
    date: new Date(Date.now() - 259200000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 5,
    title: "TekPulse Solutions Expands to North American Market",
    slug: "north-america-expansion",
    summary: "We are excited to announce our expansion into the North American market with our new Boston office.",
    content: "Full content about North America expansion...",
    category: "Company News",
    date: new Date(Date.now() - 345600000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Cybersecurity Workshop Series Launched",
    slug: "cybersecurity-workshop-series",
    summary: "Join our comprehensive cybersecurity workshop series designed for businesses of all sizes.",
    content: "Full content about cybersecurity workshops...",
    category: "Event",
    date: new Date(Date.now() - 432000000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 7,
    title: "New Cloud Infrastructure Services Available",
    slug: "cloud-infrastructure-services",
    summary: "Announcing our new suite of cloud infrastructure services including managed hosting and disaster recovery.",
    content: "Full content about cloud services...",
    category: "Product Launch",
    date: new Date(Date.now() - 518400000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 8,
    title: "TekPulse Solutions Wins Tech Innovation Award",
    slug: "tech-innovation-award",
    summary: "We are honored to receive the Tech Innovation Award for our contributions to enterprise software development.",
    content: "Full content about the award...",
    category: "Company News",
    date: new Date(Date.now() - 604800000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 9,
    title: "Machine Learning in Healthcare: A Partnership Success",
    slug: "ml-healthcare-partnership",
    summary: "Our collaboration with healthcare providers demonstrates the power of AI in improving patient outcomes.",
    content: "Full content about healthcare partnership...",
    category: "Partnership",
    date: new Date(Date.now() - 691200000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

const categories = ["All", "Company News", "Tech Insights", "Product Launch", "Event", "Partnership"];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);
  
  const filteredArticles = selectedCategory === "All" 
    ? regularArticles 
    : regularArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest from TekPulse Solutions
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          {featuredArticle && (
            <section className="py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                        {featuredArticle.category}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredArticle.date}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredArticle.summary}
                    </p>
                    <Button asChild className="group">
                      <Link to={`/news/${featuredArticle.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </section>
          )}

          {/* Category Filter */}
          <section className="py-8">
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* News Grid */}
          <section className="pb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest News</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-black/70 rounded-full backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors">
                      <Link to={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-3">
                      {article.summary}
                    </CardDescription>
                    <Button asChild variant="outline" size="sm" className="w-full group">
                      <Link to={`/news/${article.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No articles found in this category.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default News;
