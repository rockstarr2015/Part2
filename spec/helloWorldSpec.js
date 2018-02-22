const request =  require("request");

const base_url = "http://localhost:8080/";

//Server shoud return status code of 200
describe("Hello world server", ()=>{
	describe("GET /",()=>{
		it("return status code 200", (done)=>{
			request.get(base_url, function(error, response, body){
				expect(response.statusCode).toBe(200);
				done();
			});
		});

	});
});

describe("Check anagram result", ()=>{
	describe("GET /findAnagrams/stop", ()=>{

		it("should return status code 200", (done)=>{
			request.get(base_url+'findAnagrams/stop', (error, response, body)=>{
				expect(response.statusCode).toBe(200);
				done();
			});
		});

		it("should return 4 anagram for stop word", (done)=>{
			request.get(base_url+'findAnagrams/stop', (error, response, body)=>{
				
				var k = JSON.parse(response.body);
				expect(k.anagram).toEqual(["post","spot","stop","tops"]);
				done();
			});
		});

		it("should return 1 anagram for access word", (done)=>{
			request.get(base_url+'findAnagrams/access', (error, response, body)=>{
				
				var k = JSON.parse(response.body);
				expect(k.anagram).toEqual(["access"]);
				done();
			});
		});

		it("response.msg should be type of sting", (done)=>{
			request.get(base_url+'findAnagrams/stop', (error, response, body)=>{
				
				var k = JSON.parse(response.body);
				expect(typeof k.msg).toEqual('string');
				done();
			});
		});



	})
})


