
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft } from 'lucide-react';

// This would typically come from a database or API
const newsArticles = [
  {
    id: 1,
    title: "Transformative Blockchain Technology in the Cybersecurity Sector",
    slug: "blockchain-cybersecurity",
    summary: "Discover how blockchain is reshaping cybersecurity by decentralizing control, eliminating single points of failure, and empowering smart automated policies.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 mb-6">Blockchain technology is revolutionizing the cybersecurity landscape by introducing decentralized security models that eliminate traditional single points of failure.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Decentralized Security Architecture</h2>
        <p class="text-gray-700 mb-6">Unlike conventional centralized systems, blockchain creates a distributed network where security is maintained across multiple nodes, making it virtually impossible for attackers to compromise the entire system. This distributed approach ensures that even if one or several nodes are compromised, the integrity of the overall system remains intact.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Smart Contract Automation</h2>
        <p class="text-gray-700 mb-6">Smart contracts enable automated security policies that execute without human intervention, reducing the risk of human error and ensuring consistent security protocols. These self-executing contracts with the terms directly written into code provide an additional layer of security and transparency.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Immutable Audit Trails</h2>
        <p class="text-gray-700 mb-6">Every transaction and access attempt is recorded on an immutable ledger, providing complete transparency and accountability for security events. This creates an unalterable record of all activities, making it easier to detect and investigate security incidents.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Zero-Trust Implementation</h2>
        <p class="text-gray-700 mb-6">Blockchain naturally supports zero-trust security models by requiring verification for every transaction and access request, regardless of the source. This approach assumes no inherent trust and continuously validates every request.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Future Implications</h2>
        <p class="text-gray-700 mb-6">As blockchain technology continues to mature, we can expect to see even more innovative applications in cybersecurity, from decentralized identity management to quantum-resistant cryptographic protocols.</p>
      </div>
    `,
    category: "Tech Insights",
    date: new Date().toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    featured: true
  }
];

const NewsArticle = () => {
  const { slug } = useParams();
  const article = newsArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="relative h-64 md:h-96">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full mb-2">
                  {article.category}
                </span>
                <div className="flex items-center text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {article.summary}
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="article-content"
            />
          </div>

          {/* Back to News */}
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsArticle;
