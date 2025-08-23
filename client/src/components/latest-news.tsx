import { useState, useMemo } from "react";
import { Search, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import newsData from "@/data/news.json";

const filters = [
  { id: 'all', label: 'All Updates' },
  { id: 'express-entry', label: 'Express Entry' },
  { id: 'policy', label: 'Law/Policy' },
  { id: 'processing', label: 'Processing Times' },
  { id: 'fees', label: 'Fee Updates' }
];

export default function LatestNews() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = useMemo(() => {
    return newsData.filter(item => {
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'express-entry': return 'bg-teal/10 text-teal';
      case 'policy': return 'bg-coral/10 text-coral';
      case 'processing': return 'bg-royal-blue/10 text-royal-blue';
      case 'fees': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'express-entry': return 'Express Entry';
      case 'policy': return 'Policy Change';
      case 'processing': return 'Processing Times';
      case 'fees': return 'Fee Updates';
      default: return category;
    }
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-deep-navy mb-4">Latest IRCC Updates</h2>
          <p className="text-lg text-gray-600">Stay informed with the latest immigration news and policy changes</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-custom font-medium transition-colors ${
                activeFilter === filter.id 
                  ? 'bg-royal-blue text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              data-testid={`filter-${filter.id}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 rounded-custom"
              data-testid="news-search"
            />
          </div>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <Card key={item.id} className="bg-white rounded-custom shadow-soft hover:shadow-soft-lg transition-shadow" data-testid={`news-card-${item.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                      {getCategoryLabel(item.category)}
                    </Badge>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-deep-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.summary}
                  </p>
                  <a 
                    href={item.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-royal-blue hover:text-royal-blue/80 font-medium transition-colors"
                    data-testid={`news-source-${item.id}`}
                  >
                    View Source
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No news found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-50 text-deep-navy border border-gray-300 px-8 py-3 rounded-custom font-medium transition-colors"
            data-testid="load-more-news"
          >
            Load More Updates
          </Button>
        </div>
      </div>
    </section>
  );
}
