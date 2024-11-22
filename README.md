# mathAPI

### Authorization

To make any get request, you must prove your authorized, using the header `{"authorization": 1234}` (secret password). 

If you did something wrong, you will get a `401 Unauthorized` or a `403 Forbidden`. 

## Add

Add sums up every number in the array.

Get request on the url: `localhost:3000/add` \
Use the body json: `{"array": [1,2,3,4]}` or whatever data you want. 

Based on this array, you should get the json response `{10}`.

## Product

Product multiplies every number in the array.

Please refer to the [add](#add) section for the setup, except use the endpoint `/product`.

You should get the json response `{24}`.

## Evens

Evens filters the array to only include even numbers.

Please refer to the [add](#add) section for the setup, except use the endpoint `/evens`.

You should get the json response `{[2,4]}`.

## Min

Min returns the lowest number in the array.

Please refer to the [add](#add) section for the setup, except use the endpoint `/min`.

You should get the json response `{1}`.

## Max

Max returns the largest number in the array.

Please refer to the [add](#add) section for the setup, except use the endpoint `/max`.

You should get the json response `{4}`.

## Sort

Sort sorts the array in ascending or descending order.

Please refer to the [add](#add) section for the setup, except use the endpoint `/sort`. You must also include the parameter: `ascending` with a corresponding boolean.

With ascending = true, you should get the json response `{1,2,3,4}`.

## Target

Target checks if two numbers in the array sum up to a specific target number.

Please refer to the [add](#add) section for the setup, except use the endpoint `/target`. You must also include the parameter: `target` with the target number you want. 

With the target number as 6, you should get the json response `{2,4}`.



