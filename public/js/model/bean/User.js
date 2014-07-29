
/**
 *
 * User
 * 
 * GeCo
 * 
 * @author isdarka
 * @category JavaScript
 * @package Bean
 * @copyright 
 * @license 
 * @created Wed Apr 16 10:40:41 2014
 * @version 1.0
 */
function User()
{
	this.idUser;
	this.status;
	this.idPerson;
	this.idRole;
	this.idFile;
	this.username;
	this.password;
}

User.prototype = new Person();
User.prototype.constructor = User;

User.prototype.getIndex = function()
{
	return this.idUser;
};

User.prototype.setIdUser = function(idUser)
{
	this.idUser = idUser;
	return this;
};

User.prototype.setStatus = function(status)
{
	this.status = status;
	return this;
};

User.prototype.setIdPerson = function(idPerson)
{
	this.idPerson = idPerson;
	return this;
};

User.prototype.setIdRole = function(idRole)
{
	this.idRole = idRole;
	return this;
};

User.prototype.setIdFile = function(idFile)
{
	this.idFile = idFile;
	return this;
};

User.prototype.setUsername = function(username)
{
	this.username = username;
	return this;
};

User.prototype.setPassword = function(password)
{
	this.password = password;
	return this;
};

User.prototype.getIdUser = function()
{
	return this.idUser;
};

User.prototype.getStatus = function()
{
	return this.status;
};

User.prototype.getIdPerson = function()
{
	return this.idPerson;
};

User.prototype.getIdRole = function()
{
	return this.idRole;
};

User.prototype.getIdFile = function()
{
	return this.idFile;
};

User.prototype.getUsername = function()
{
	return this.username;
};

User.prototype.getPassword = function()
{
	return this.password;
};

