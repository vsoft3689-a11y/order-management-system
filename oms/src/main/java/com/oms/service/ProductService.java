package com.oms.service;

import com.oms.entity.Product;
import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(Integer id);
    Product createProduct(Product product);
    Product updateProduct(Integer id, Product productDetails);
    void deleteProduct(Integer id);
    List<Product> getProductsByCategory(String category);
    List<Product> searchProducts(String keyword);
    Product updateStock(Integer id, Integer quantity);
}