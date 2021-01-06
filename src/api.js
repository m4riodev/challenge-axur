import axios from 'axios';

const keys = {
  pubs: '5be5e3fa2f000082000fc3f8',
  authors: '5be5e3ae2f00005b000fc3f6'
}

const api = axios.create({
  baseURL: 'http://www.mocky.io/v2/'
});

export const getData = async () => {
	return await axios.all([
		api.get(keys.pubs),
		api.get(keys.authors)
	]).then(res => {
		const _posts = res[0].data;
		const _authors = res[1].data;
		
		const _result = _posts.map(p => {
			let _data = _authors.find(a => a.id === p.metadata.authorId);
			return {...p, author: _data.name}
		});
		
		_result.sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt);

		return {
			publications: _result,
			authors: _authors
		};
	});
}