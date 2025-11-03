package com.oms.service;

import com.oms.entity.Order;
import java.util.List;
import java.util.Optional;

public interface OrderService {
    List<Order> getAllOrders();
    Optional<Order> getOrderById(Integer id);
    List<Order> getUserOrders(Integer userId);
    Order updateOrderStatus(Integer id, Order.OrderStatus status);
    Order createOrder(Order order, List<Object> orderItems);
    Order updateOrder(Integer id, Order orderDetails);
    void deleteOrder(Integer id);
    Object getOrderItems(Integer orderId);
    List<Order> getOrdersByStatus(Order.OrderStatus status);
}