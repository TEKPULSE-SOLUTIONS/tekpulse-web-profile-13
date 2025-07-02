
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, BookOpen } from 'lucide-react';

// Enhanced blog posts data with AI, ML, Blockchain, and Cybersecurity content
const blogPosts = [
  {
    id: 1,
    title: "Transformative Blockchain Technology in the Cybersecurity Sector",
    slug: "blockchain-cybersecurity",
    date: new Date().toLocaleDateString(),
    description: "Exploring how blockchain is revolutionizing cybersecurity with decentralized identity, tamper-proof ledgers, and smart contract automation.",
    category: "Blockchain & Cybersecurity"
  },
  {
    id: 2,
    title: "Machine Learning Algorithms for Predictive Analytics in Business",
    slug: "machine-learning-predictive-analytics",
    date: new Date(Date.now() - 86400000).toLocaleDateString(),
    description: "Discover how machine learning algorithms are transforming business intelligence through advanced predictive analytics and data-driven decision making.",
    category: "Machine Learning"
  },
  {
    id: 3,
    title: "Artificial Intelligence in Modern Software Development",
    slug: "ai-software-development",
    date: new Date(Date.now() - 172800000).toLocaleDateString(),
    description: "How AI is reshaping software development processes, from code generation to automated testing and intelligent debugging solutions.",
    category: "Artificial Intelligence"
  },
  {
    id: 4,
    title: "Zero Trust Architecture: The Future of Cybersecurity",
    slug: "zero-trust-cybersecurity",
    date: new Date(Date.now() - 259200000).toLocaleDateString(),
    description: "Understanding Zero Trust security models and their implementation in modern enterprise environments to protect against evolving cyber threats.",
    category: "Cybersecurity"
  },
  {
    id: 5,
    title: "Deep Learning Applications in Computer Vision",
    slug: "deep-learning-computer-vision",
    date: new Date(Date.now() - 345600000).toLocaleDateString(),
    description: "Exploring advanced deep learning techniques for computer vision applications including object detection, image recognition, and autonomous systems.",
    category: "Machine Learning & AI"
  },
  {
    id: 6,
    title: "Smart Contracts and Decentralized Applications (DApps)",
    slug: "smart-contracts-dapps",
    date: new Date(Date.now() - 432000000).toLocaleDateString(),
    description: "A comprehensive guide to building smart contracts and decentralized applications on blockchain platforms like Ethereum and Solana.",
    category: "Blockchain"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Technology Insights Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the latest trends and insights in AI, Machine Learning, Blockchain, and Cybersecurity
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.description}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button asChild variant="default" size="sm" className="w-full">
                      <Link to={`/blog/${post.slug}`}>
                        <BookOpen className="h-4 w-4 mr-1" />
                        Read Article
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No blog posts yet</h3>
              <p className="text-gray-600 mb-4">Check back later for new content!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
