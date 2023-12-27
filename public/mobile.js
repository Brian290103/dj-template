let mobileNavbarTrigger=document.getElementById('mobile_navbar_tigger')
let mobileNavbarWrapper=document.getElementById('mobile_navbar_wrapper')
let mobileNavbar=document.getElementById('mobile_navbar')
let removeMobileNavbar=document.getElementById('remove_mobile_navbar')
let closeMobileNavbar=document.getElementById('mobile_navbar_closer')

mobileNavbarTrigger.addEventListener('click',toggleNavbar)
closeMobileNavbar.addEventListener('click',ifToggleNavbar)
removeMobileNavbar.addEventListener('click',ifToggleNavbar)

function ifToggleNavbar(){
    if(!mobileNavbarWrapper.classList.contains('invisible')){
        mobileNavbarWrapper.classList.add('invisible')
        mobileNavbar.classList.toggle('w-0')
        mobileNavbar.classList.toggle('w-[300px]')
    }
}
function toggleNavbar(){
    console.log('clicked')
    mobileNavbarWrapper.classList.toggle('invisible')
    mobileNavbar.classList.toggle('w-0')
    mobileNavbar.classList.toggle('w-[300px]')

}