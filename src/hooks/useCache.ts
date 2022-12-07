import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { key_App } from "../types/constans/constant";

export const useCache = () => {
  const [items, setItems] = useState<any>([]);
  const navigate = useNavigate()

  useEffect(() => {
    const values = localStorage.getItem(key_App);
    if (!values) {
      navigate('/')
    }
    setItems(values);
    return items
  }, [items, navigate]);
};
