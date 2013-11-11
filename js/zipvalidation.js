//Forces Zip validation on an input element
$.fn.forceZipValidation = function()
{
	var input = this;
	var regex = /^$|^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
	input.blur(function()
	{
		if (!regex.test(input.val()))
		{
			alert("Please enter a valid US Zip Code");
			
			//workaround for .focus() not working in Firefox
			setTimeout(function() 
			{
				input.focus();
				input.select();
			}, 0);
		}
	});
}