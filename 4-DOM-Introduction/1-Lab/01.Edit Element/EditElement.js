function editElement(reference, match, replacer) {
    let text = reference.textContent;
    reference.textContent = text.split(match).join(replacer);
}