
/**
 *
 * MexicoZipCode
 * 
 * GeCo
 * 
 * @author isdarka
 * @category JavaScript
 * @package Bean
 * @copyright 
 * @license 
 * @created Tue Apr 29 17:53:57 2014
 * @version 1.0
 */
function MexicoZipCode()
{
	this.idMexicoZipCode;
	this.dCodigo;
	this.dAsenta;
	this.dTipoAsenta;
	this.dMnpio;
	this.dEstado;
	this.dCiudad;
	this.dCP;
	this.cEstado;
	this.cOficina;
	this.cCP;
	this.cTipoAsenta;
	this.cMnpio;
	this.idAsentaCpcons;
	this.dZona;
	this.cCveCiudad;
}

MexicoZipCode.prototype = new Bean();
MexicoZipCode.prototype.constructor = MexicoZipCode;

MexicoZipCode.prototype.getIndex = function()
{
	return this.idMexicoZipCode;
};

MexicoZipCode.prototype.setIdMexicoZipCode = function(idMexicoZipCode)
{
	this.idMexicoZipCode = idMexicoZipCode;
	return this;
};

MexicoZipCode.prototype.setDCodigo = function(dCodigo)
{
	this.dCodigo = dCodigo;
	return this;
};

MexicoZipCode.prototype.setDAsenta = function(dAsenta)
{
	this.dAsenta = dAsenta;
	return this;
};

MexicoZipCode.prototype.setDTipoAsenta = function(dTipoAsenta)
{
	this.dTipoAsenta = dTipoAsenta;
	return this;
};

MexicoZipCode.prototype.setDMnpio = function(dMnpio)
{
	this.dMnpio = dMnpio;
	return this;
};

MexicoZipCode.prototype.setDEstado = function(dEstado)
{
	this.dEstado = dEstado;
	return this;
};

MexicoZipCode.prototype.setDCiudad = function(dCiudad)
{
	this.dCiudad = dCiudad;
	return this;
};

MexicoZipCode.prototype.setDCP = function(dCP)
{
	this.dCP = dCP;
	return this;
};

MexicoZipCode.prototype.setCEstado = function(cEstado)
{
	this.cEstado = cEstado;
	return this;
};

MexicoZipCode.prototype.setCOficina = function(cOficina)
{
	this.cOficina = cOficina;
	return this;
};

MexicoZipCode.prototype.setCCP = function(cCP)
{
	this.cCP = cCP;
	return this;
};

MexicoZipCode.prototype.setCTipoAsenta = function(cTipoAsenta)
{
	this.cTipoAsenta = cTipoAsenta;
	return this;
};

MexicoZipCode.prototype.setCMnpio = function(cMnpio)
{
	this.cMnpio = cMnpio;
	return this;
};

MexicoZipCode.prototype.setIdAsentaCpcons = function(idAsentaCpcons)
{
	this.idAsentaCpcons = idAsentaCpcons;
	return this;
};

MexicoZipCode.prototype.setDZona = function(dZona)
{
	this.dZona = dZona;
	return this;
};

MexicoZipCode.prototype.setCCveCiudad = function(cCveCiudad)
{
	this.cCveCiudad = cCveCiudad;
	return this;
};

MexicoZipCode.prototype.getIdMexicoZipCode = function()
{
	return this.idMexicoZipCode;
};

MexicoZipCode.prototype.getDCodigo = function()
{
	return this.dCodigo;
};

MexicoZipCode.prototype.getDAsenta = function()
{
	return this.dAsenta;
};

MexicoZipCode.prototype.getDTipoAsenta = function()
{
	return this.dTipoAsenta;
};

MexicoZipCode.prototype.getDMnpio = function()
{
	return this.dMnpio;
}

MexicoZipCode.prototype.getDEstado = function()
{
	return this.dEstado;
};

MexicoZipCode.prototype.getDCiudad = function()
{
	return this.dCiudad;
};

MexicoZipCode.prototype.getDCP = function()
{
	return this.dCP;
}

MexicoZipCode.prototype.getCEstado = function()
{
	return this.cEstado;
};

MexicoZipCode.prototype.getCOficina = function()
{
	return this.cOficina;
};

MexicoZipCode.prototype.getCCP = function()
{
	return this.cCP;
};

MexicoZipCode.prototype.getCTipoAsenta = function()
{
	return this.cTipoAsenta;
};

MexicoZipCode.prototype.getCMnpio = function()
{
	return this.cMnpio;
};

MexicoZipCode.prototype.getIdAsentaCpcons = function()
{
	return this.idAsentaCpcons;
};

MexicoZipCode.prototype.getDZona = function()
{
	return this.dZona;
};

MexicoZipCode.prototype.getCCveCiudad = function()
{
	return this.cCveCiudad;
};

/**
 * 
 * @param {jQuery} element
 * @returns
 */
MexicoZipCode.prototype.render = function(element, isNew)
{
	var tr = $('<tr data-index="' + this.getIdMexicoZipCode() + '"></tr>');
	if(isNew)
		tr.addClass("success");
	tr.append($('<td></td>').text(this.getDCodigo()));
	tr.append($('<td></td>').text(this.getDEstado()));
	tr.append($('<td></td>').text(this.getDAsenta()));
	tr.append($('<td></td>').append($('<a></a>').addClass("btn").addClass("btn-danger").append($('<i></i>').addClass("fa").addClass("fa-minus"))));
	
	var exist = element.find('[data-index="' + this.getIndex() + '"]');
	if(exist.length > 0)
	{
		exist.after(tr);
		exist.remove();
	}else
		element.append(tr);
};


