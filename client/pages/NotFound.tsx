import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PlaceholderPage from "./PlaceholderPage";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <PlaceholderPage
      title="Página Não Encontrada"
      description="A página que você está procurando não existe ou foi movida."
    />
  );
};

export default NotFound;
