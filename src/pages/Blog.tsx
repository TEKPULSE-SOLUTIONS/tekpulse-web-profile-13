
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, FileText } from 'lucide-react';

// Mock data for blog posts (in a real app, this would come from a database)
const blogPosts = [
  {
    id: 1,
    title: "Transformative Blockchain Technology in the Cybersecurity Sector",
    slug: "blockchain-cybersecurity",
    date: new Date().toLocaleDateString(),
    description: "Exploring how blockchain is revolutionizing cybersecurity with decentralized identity, tamper-proof ledgers, and smart contract automation.",
    pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My PDF Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover insights, tutorials, and resources through our collection of PDF articles
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="line-clamp-2">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {post.description}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/blog/${post.slug}`}>
                        <FileText className="h-4 w-4 mr-1" />
                        Read More
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" size="sm">
                      <a href={post.pdf_url} target="_blank" rel="noopener noreferrer">
                        Read PDF
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
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
