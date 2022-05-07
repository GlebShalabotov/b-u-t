const menuApp = [{
    label: 'Service Plan',
    action: 'openServicePlan',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/service-plan.png'
},
{
    label: 'Protections',
    action: 'protectionsClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/protections.png'
},
{
    label: 'Week Timer',
    action: 'weekTimerClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/week-timer.png'
},
{
    label: 'Information',
    action: 'infoClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/information.png'
},
{
    label: 'Test',
    action: 'notImplemented',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/test.png'
},
{
    label: 'Counters',
    action: 'countersClicked"',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/counters.png'
},
{
    label: 'Regulation',
    action: 'regulationClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/regulation.png'
},
{
    label: 'Inputs',
    action: 'inputsClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/input.png'
},
{
    label: 'Outputs',
    action: 'outputsClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/output.png'
},
{
    label: 'Event History',
    action: 'eventHistoryClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/event-history.png'
},
{
    label: 'Settings',
    action: 'settingsClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/settings.png'
},
{
    label: 'dreamWeaver',
    action: 'dreamWeaverClicked',
    imgSrc: 'https://icongr.am/simple/adobedreamweaver.svg?size=40&color=currentColor&colored=false'
},
{
    label: 'lucky charm',
    action: 'charmClicked',
    imgSrc: 'https://icongr.am/simple/aerlingus.svg?size=40&color=0e9a18&colored=false'
},
{
    label: 'sunshine',
    action: 'putonsunglasses',
    imgSrc: 'https://icongr.am/simple/awesomelists.svg?size=40&color=640c0c&colored=false'
}]

const loadinIcons = () => {
    var $buttonNavigationRoot = $('#buttonNavigation');
    menuApp.map((icon) => {
        let $element = $('<div>', { label: icon.label, action: icon.action, class: 'button navigatable' });
        let $imgElement = $('<img>', { src: icon.imgSrc });
        $element.append($imgElement);
        console.log($element);
        $buttonNavigationRoot.append($element);
    });
}