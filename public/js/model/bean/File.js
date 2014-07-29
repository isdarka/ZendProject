/**
 * @autor isdarka
 * @created Dec 23, 2013, 3:21:32 PM
 * 
 */

function File()
{
	this.idFile;
	this.name;
	this.path;
}

File.prototype = new Bean();
File.prototype.constructor = File;

File.prototype.getIndex = function()
{
	return this.idFile;
};

File.prototype.setIdFile = function(idFile)
{
	this.idFile = idFile;
	return this;
};

File.prototype.getIdFile = function()
{
	return this.idFile;
};

File.prototype.setName = function(name)
{
	this.name = name;
	return this;
};

File.prototype.getName = function()
{
	return this.name;
};

File.prototype.setPath = function(path)
{
	this.path = path;
	return this;
};

File.prototype.getPath = function()
{
	return this.path;
};

/**
 * 
 * @param {jQuery} element
 * @returns
 */
File.prototype.renderTable = function(element)
{
	var tr = $('<tr data-index="' + this.getIdFile() + '"></tr>');
	tr.append($('<td></td>').text(this.getName()));
	tr.append($('<a data-toggle="tooltip"></a>')
			.prop("href", baseUrl + "/core/file/download/" + this.getIdFile())
			.addClass("btn").addClass("btn-default").prop("title", "Download")
			.append($('<i></i>').addClass("fa").addClass("fa-download")));
	
	element.append(tr);
};