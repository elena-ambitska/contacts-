export function convertNationality(nat){
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    return regionNames.of(nat);
}