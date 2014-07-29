
/**
 *
 * Address
 * 
 * GeCo
 * 
 * @author isdarka
 * @category JavaScript
 * @package Bean
 * @copyright 
 * @license 
 * @created Wed Apr 30 09:40:52 2014
 * @version 1.0
 */
function Address()
{
	this.idAddress;
	this.zipcode;
	this.state;
	this.street;
	this.houseNumber;
	this.apartmentNumber;
	this.settlement;
	this.district;
	this.neighborhood;
	this.city;
}

Address.prototype = new Bean();
Address.prototype.constructor = Address;

Address.prototype.getIndex = function()
{
	return this.idAddress;
};

Address.prototype.setIdAddress = function(idAddress)
{
	this.idAddress = idAddress;
	return this;
};

Address.prototype.setZipcode = function(zipcode)
{
	this.zipcode = zipcode;
	return this;
};

Address.prototype.setState = function(state)
{
	this.state = state;
	return this;
};

Address.prototype.setStreet = function(street)
{
	this.street = street;
	return this;
};

Address.prototype.setHouseNumber = function(houseNumber)
{
	this.houseNumber = houseNumber;
	return this;
};

Address.prototype.setApartmentNumber = function(apartmentNumber)
{
	this.apartmentNumber = apartmentNumber;
	return this;
};

Address.prototype.setSettlement = function(settlement)
{
	this.settlement = settlement;
	return this;
};

Address.prototype.setDistrict = function(district)
{
	this.district = district;
	return this;
};

Address.prototype.setNeighborhood = function(neighborhood)
{
	this.neighborhood = neighborhood;
	return this;
};
Address.prototype.setCity = function(city)
{
	this.city = city;
	return this;
};

Address.prototype.getIdAddress = function()
{
	return this.idAddress;
};

Address.prototype.getZipcode = function()
{
	return this.zipcode;
};

Address.prototype.getState = function()
{
	return this.state;
};

Address.prototype.getStreet = function()
{
	return this.street;
};

Address.prototype.getHouseNumber = function()
{
	return this.houseNumber;
};

Address.prototype.getApartmentNumber = function()
{
	return this.apartmentNumber;
};

Address.prototype.getSettlement = function()
{
	return this.settlement;
};

Address.prototype.getDistrict = function()
{
	return this.district;
};

Address.prototype.getNeighborhood = function()
{
	return this.neighborhood;
};

Address.prototype.getCity = function()
{
	return this.city;
};

/**
 * 
 * @param {jQuery} element
 */
Address.prototype.renderInfo = function(element)
{
	var dl = $('<dl></dl>');
	dl.append($('<dt></dt>').text("Dirección:"));
	dl.append($('<dd></dd>').text(this.getStreet() + " " + this.getHouseNumber()));
	dl.append($('<dd></dd>').text(this.getNeighborhood() + ", " + this.getSettlement() + ", C.P. " + this.getZipcode()));
	dl.append($('<dd></dd>').text(this.getCity() + ", " + this.getState()));
	
	element.html(dl);

};

Address.prototype.toString = function()
{
	var address = " ";
	address += this.getStreet();
	address += " " +this.getHouseNumber();
	address += ", " +this.getNeighborhood();
	address += ", " +this.getSettlement();
	address += ", " +this.getZipcode();
	address += ", " +this.getState();
	return address;
};