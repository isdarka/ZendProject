/**
 * @autor isdarka
 * @created Dec 16, 2013, 4:40:28 PM
 * 
 */
function Person()
{
	this.idPerson;
	this.name;
	this.lastName;
	this.secondLastName;
	this.birthdate;
	this.gender;
	this.maritalStatus;
	this.phoneNumberCollection = new Collection();
	this.emailCollection = new Collection();
	this.address;
}

Person.prototype = new Bean();
Person.prototype.constructor = Person;

Person.prototype.getIndex = function()
{
	return this.idPerson + "-" + this.name + "-" + this.lastName + "-" + this.secondLastName; 
};

Person.prototype.setIdPerson = function(idPerson)
{
	this.idPerson = idPerson;
	return this;
};

Person.prototype.getIdPerson = function()
{
	return this.idPerson;
};

Person.prototype.setName = function(name)
{
	this.name = name;
	return this;
};

Person.prototype.getName = function()
{
	return this.name;
};

Person.prototype.setLastName = function(lastName)
{
	this.lastName = lastName;
	return this;
};

Person.prototype.setGender = function(gender)
{
	this.gender = gender;
	return this;
};

Person.prototype.setMaritalStatus = function(maritalStatus)
{
	this.maritalStatus = maritalStatus;
	return this;
};

Person.prototype.getLastName = function()
{
	return this.lastName;
};

Person.prototype.setSecondLastName = function(secondLastName)
{
	this.secondLastName = secondLastName;
	return this;
};

/**
 * 
 * @param {Address} address
 * @returns {Person}
 */
Person.prototype.setAddress = function(address)
{
	this.address = address;
	return this;
};

/**
 * 
 * @returns {Address}
 */
Person.prototype.getAddress = function()
{
	return this.address;
};

Person.prototype.getSecondLastName = function()
{
	return this.secondLastName;
};


Person.prototype.setBirthdate = function(birthdate)
{
	this.birthdate = birthdate;
	return this;
};

Person.prototype.getBirthdate = function()
{
	return this.birthdate;
};

Person.prototype.getGender = function()
{
	return this.gender;
};

Person.prototype.getMaritalStatus = function()
{
	return this.maritalStatus;
};

Person.prototype.getFullName = function()
{
	return this.name + " " + this.lastName + " " + this.secondLastName;
};

Person.prototype.addPhoneNumber = function(phoneNumber)
{
	this.phoneNumberCollection.append(phoneNumber);
};

Person.prototype.deletePhoneNumber = function(index)
{
	this.phoneNumberCollection.deleteByIndex(index);
};

Person.prototype.getPhoneNumers = function()
{
	return this.phoneNumberCollection.getStorage();
};

Person.prototype.deletePhoneNumbers = function()
{
	this.phoneNumberCollection = new Collection();
};

Person.prototype.addEmail = function(email)
{
	this.emailCollection.append(email);
};

Person.prototype.deleteEmail = function(index)
{
	this.emailCollection.deleteByIndex(index);
};

Person.prototype.getEmails = function()
{
	return this.emailCollection.getStorage();
};

Person.prototype.deleteEmails = function()
{
	this.emailCollection = new Collection();
};

/**
 * @param {jQuery} element
 */
Person.prototype.render = function(element)
{
	var html = '';
		html += '<tr data-index="' + this.getIndex() + '">';
		html += '<td>';
		html += this.getFullName();
		html += '</td>';
		html += '<td>';
		html += '<div class="btn-group">';
		html += '<a href="#" class="btn btn-default edith" ><i class="fa fa-pencil"></i></a>';
		html += '<a class="btn btn-default phones" ><i class="fa fa-phone"></i></a>';
		html += '<a class="btn btn-default emails" ><i class="fa fa-envelope-o"></i></a>';
		html += '<a class="btn btn-danger" ><i class="fa fa-minus"></i></a>';
		html += '</div>';
		html += '</td>';
		html += '</tr>';
		
		
	var exist = element.find('[data-index="' + this.getIndex() + '"]');
	if(exist.length > 0)
	{
		exist.after(html);
		exist.remove();
	}else
		element.append(html);
		
};


Person.prototype.renderTable = function(element)
{
	var tr = $('<tr data-index="' + this.getIndex() + '"></tr>');
		tr.append($('<td></td>').text(this.getFullName()));
	var divGroup = $('<div></div>').addClass("btn-group");
		divGroup.append($('<a></a>').prop("href", "#").addClass("btn").addClass("btn-danger").append($('<i></i>').addClass("fa").addClass("fa-minus")));
		tr.append($('<td></td>').append(divGroup));
		
	var exist = element.find('[data-index="' + this.getIndex() + '"]');
	if(exist.length > 0)
	{
		exist.after(tr);
		exist.remove();
	}else
		element.append(tr);
};
