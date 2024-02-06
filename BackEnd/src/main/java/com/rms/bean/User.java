package com.rms.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tbl_users")
public class User {

	@Id
	@Column(name = "user_id", nullable = false)
	private long userId;
	@Column(name = "user_name", nullable = false)
	private String userName;
	@Column(name = "user_password", nullable = false)
	private String userPassword;
	@Column(name = "user_email", nullable = false)
	private String userEmail;
	@Column(name = "user_contact", nullable = false)
	private long userContact;
	@Column(name = "user_type")
	private String userType;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(long userId, String userName, String userPassword, String userEmail, long userContact,
			String userType) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userPassword = userPassword;
		this.userEmail = userEmail;
		this.userContact = userContact;
		this.userType = userType;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public long getUserContact() {
		return userContact;
	}

	public void setUserContact(long userContact) {
		this.userContact = userContact;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userPassword=" + userPassword + ", userEmail="
				+ userEmail + ", userContact=" + userContact + ", userType=" + userType + "]";
	}

}