## Updating Resources using PATCH method:

* The HTTP PATCH method should be used whenever you would like to change or update just a small part of the state of the resource. You should use the PUT method only when you would like to replace the resource in its entirety. Note that PATCH is not a replacement for PUT or POST.

* The PATCH request MUST include a single resource object as primary data. The resource object MUST contain type and id members.

* For example:
* PATCH /articles/1 HTTP/1.1  (URL+endpoint for the patch request )
* Content-Type: application/vnd.api+json  (content-type display that this is a JSON object)
* Accept: application/vnd.api+json
* (Below is the single object with id=1 that we want to update)
* {
  "data": {
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "To TDD or Not"
    }
  }
}

### Patch Example:

* Consider a resource, employee. The JSON representation of an example might look like this:

  {
  "name":"John Doe", "department":"sales", "salary":65500
  }
* If the salary field of this employee record needed updating, the PUT method could be used to replace the employee, but this would be wasteful.

* The PATCH command could be used instead to send only the new salary:

  {
  "salary":70000
  }
* Then object look like this.
  {
  "name":"John Doe", "department":"sales", "salary":70000
  }

## POST vs PUT vs PATCH:

### POST :
* You use POST to create a resource and instruct the server to make a Uniform Resource Identifier (URI) for it. 
For example, when you want to create a new article you would POST to /articles to make the file and get the URI, so you end up with /articles/1234/. 
### PUT :
* PUT also creates resources, but it does so for a known URI. So, you can PUT to /articles/1234/. If the article doesn't exist, PUT creates it. If it does exist, this HTTP verb updates it. While PUT seems nearly identical to POST, the difference between the two comes down to idempotence. 
* Idempotence is a property that creates identical side effects whether you have one or many results. PUT has this characteristic, while POST creates new resources infinitely. In general, POST works best for resource creation, while PUT handles updates. 
### PATCH :
* So, where does PATCH come into the picture? This HTTP verb partially updates resources without sending the complete representation of it. When you're working with complicated objects and resources, it's a big deal to update more than you need to.  
* With this example...
{ "first_name": "Claude", "last_name": "Elements", "email": "claude@cloud-elements.com", "favorite_color": "blue" }
* ...PATCH allows you to change the color with 
JSON :{ "favorite_color": "purple" }.


## Responses:
--------------
### 202 Accepted
If an update request has been accepted for processing, but the processing has not been completed by the time the server responds, the server MUST return a 202 Accepted status code.

### 200 OK
If a server accepts an update but also changes the resource(s) in ways other than those specified by the request (for example, updating the updated-at attribute or a computed sha), it MUST return a 200 OK response. The response document MUST include a representation of the updated resource(s) as if a GET request was made to the request URL.

A server MUST return a 200 OK status code if an update is successful, the client’s current fields remain up to date, and the server responds only with top-level meta data. In this case the server MUST NOT include a representation of the updated resource(s).

### 204 No Content
If an update is successful and the server doesn’t update any fields besides those provided, the server MUST return either a 200 OK status code and response document (as described above) or a 204 No Content status code with no response document.

### 403 Forbidden
A server MUST return 403 Forbidden in response to an unsupported request to update a resource or relationship.

### 404 Not Found
A server MUST return 404 Not Found when processing a request to modify a resource that does not exist.

A server MUST return 404 Not Found when processing a request that references a related resource that does not exist.

### 409 Conflict
A server MAY return 409 Conflict when processing a PATCH request to update a resource if that update would violate other server-enforced constraints (such as a uniqueness constraint on a property other than id).