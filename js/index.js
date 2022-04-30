let res = '';

function wrapTags(text, tag){
	res = `<${tag}>${text}</${tag}>`;
	console.log(res);
}

wrapTags('Принимает первым аргументом любую строку', 'span')