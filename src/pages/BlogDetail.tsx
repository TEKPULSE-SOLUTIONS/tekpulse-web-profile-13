
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Download, ArrowLeft } from 'lucide-react';

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

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Button asChild variant="outline">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Post Header */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                {post.title}
              </CardTitle>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <Button asChild variant="outline" size="sm">
                  <a href={post.pdf_url} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                {post.description}
              </p>
            </CardContent>
          </Card>

          {/* PDF Viewer */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">PDF Viewer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[600px] border rounded-lg overflow-hidden">
                <iframe 
                  src={post.pdf_url} 
                  width="100%" 
                  height="600px" 
                  style={{ border: 'none' }}
                  title={`PDF: ${post.title}`}
                />
              </div>
              <div className="mt-4 text-center">
                <Button asChild>
                  <a href={post.pdf_url} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
