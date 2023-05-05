const observer= new IntersectionObserver((entries) =>
{
    entries.forEach((entry)=>
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenelements=document.querySelectorAll('.container');
hiddenelements.forEach((el)=>observer.observe(el));