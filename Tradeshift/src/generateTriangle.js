var btnSubmit = document.querySelector('#btnSubmit');
var AB = document.querySelector('#AB');
var BC = document.querySelector('#BC');
var CA = document.querySelector('#CA');

btnSubmit.addEventListener("click", function ()
{
    //console.log("OK");
    validateForm();
});

function validateForm()
{
    var formInput = document.forms["triangleForm"]["AB", "BC", "CA"].value;

    if (formInput == "" || formInput == 0 )
    {
        document.querySelector('#textBox').innerHTML = "All fields must contain a number and higher than 0";
        return false;
    }
    else
    {
        getResult();
    }
}


function getTriangleType(ab, bc, ca)
{

    if (ab == bc && bc == ca)
    {
        return "Equilateral triangle";
    }

    else if (ab == bc || bc == ca || ca == ab )
    {
        return "Isosceles triangle";

    }

    else
    {
        return "Scalene triangle";
    }
}

function getResult()
{
    var ab = document.triangleForm.AB.value;
    var bc = document.triangleForm.BC.value;
    var ca = document.triangleForm.CA.value;

    document.querySelector('#textBox').innerHTML = getTriangleType(ab,bc,ca);

}