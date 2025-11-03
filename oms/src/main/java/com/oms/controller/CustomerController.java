package com.oms.controller;

import com.oms.entity.Order;
import com.oms.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin(origins = "http://localhost:8080")
public class CustomerController {

    @Autowired
    private OrderService orderService;

    // Remove unused userService or add @SuppressWarnings("unused")
    // @Autowired
    // private UserService userService;

    @GetMapping("/{userId}/orders")
    public List<Order> getCustomerOrders(@PathVariable Integer userId) {
        return orderService.getUserOrders(userId);
    }

    @PostMapping("/{userId}/orders")
    public Order createOrder(@PathVariable Integer userId, @RequestBody Order order) {
        order.setUserId(userId);
        order.setStatus(Order.OrderStatus.PENDING);
        return orderService.createOrder(order, List.of());
    }

    @GetMapping("/{userId}/orders/{orderId}")
    public ResponseEntity<?> getCustomerOrder(@PathVariable Integer userId, 
                                            @PathVariable Integer orderId) {
        return orderService.getOrderById(orderId)
                .map(order -> {
                    if (order.getUserId().equals(userId)) {
                        return ResponseEntity.ok(order);
                    } else {
                        return ResponseEntity.status(403).build();
                    }
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{userId}/orders/{orderId}/cancel")
    public ResponseEntity<Order> cancelOrder(@PathVariable Integer userId, 
                                           @PathVariable Integer orderId) {
        try {
            Order order = orderService.getOrderById(orderId)
                    .orElseThrow(() -> new RuntimeException("Order not found"));
            
            if (!order.getUserId().equals(userId)) {
                return ResponseEntity.status(403).build();
            }
            
            Order cancelledOrder = orderService.updateOrderStatus(orderId, Order.OrderStatus.CANCELLED);
            return ResponseEntity.ok(cancelledOrder);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{userId}/orders/{orderId}/items")
    public ResponseEntity<?> getOrderItems(@PathVariable Integer userId, 
                                         @PathVariable Integer orderId) {
        try {
            Order order = orderService.getOrderById(orderId)
                    .orElseThrow(() -> new RuntimeException("Order not found"));
            
            if (!order.getUserId().equals(userId)) {
                return ResponseEntity.status(403).build();
            }
            
            Object orderItems = orderService.getOrderItems(orderId);
            return ResponseEntity.ok(orderItems);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}