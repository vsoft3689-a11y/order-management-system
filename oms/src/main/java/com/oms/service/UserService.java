package com.oms.service;

import com.oms.entity.User;
import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUsers();
    Optional<User> getUserById(Integer id);
    Optional<User> getUserByEmail(String email);
    User createUser(User user);
    User registerUser(User user); // Make sure this method exists
    User updateUser(Integer id, User userDetails);
    void deleteUser(Integer id);
    boolean validateUser(String email, String password);
    void initializeDefaultUsers();
}