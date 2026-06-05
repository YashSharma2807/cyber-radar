import { useState, useEffect } from "react";

export default function Home() {
  const [newsFeed, setNewsFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLiveNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        const response = await fetch(
          `/api/news?q="cybersecurity"&sortby=publishedAt&lang=en&apikey=${apiKey}`,
        );
        const data = await response.json();
        if (data.articles) {
          setNewsFeed(
            data.articles.slice(0, 9).map((article, i) => ({
              id: i,
              title: article.title,
              summary: article.description || "No summary provided.",
              date: new Date(article.publishedAt).toLocaleDateString(),
              url: article.url,
              image:
                article.urlToImage ||
                "https://via.placeholder.com/600x300/0f172a/10b981?text=[+NO+VISUAL+FEED+]",
            })),
          );
        } else setError("No data received.");
        setIsLoading(false);
      } catch (err) {
        setError("Connection failed.");
        setIsLoading(false);
      }
    };
    fetchLiveNews();
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "monospace",
        color: "#10b981",
        backgroundColor: "#000000",
        minHeight: "100vh",
      }}
    >
      <h1 className="cyber-header">DASHBOARD</h1>
      {isLoading ? (
        <p style={{ color: "#10b981" }}>Loading...</p>
      ) : error ? (
        <p style={{ color: "#ef4444" }}>[ ERROR ] {error}</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "35px",
          }}
        >
          {newsFeed.map((news, index) => (
            <div
              key={news.id}
              className="news-card"
              style={{
                "--theme-color": "#10b981",
                animationDelay: `${index * 0.1}s`,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "220px",
                  width: "100%",
                  overflow: "hidden",
                  borderBottom: "1px solid #1e293b",
                }}
              >
                <img
                  src={news.image}
                  alt="News"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  padding: "25px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {news.date}
                </p>
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "18px",
                    marginTop: "0",
                    marginBottom: "15px",
                  }}
                >
                  {news.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "14px",
                    marginBottom: "25px",
                    flexGrow: 1,
                  }}
                >
                  {news.summary}
                </p>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-button"
                >
                  VIEW FULL REPORT
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
