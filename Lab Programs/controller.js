var app = angular.module("programScript", ['ngSanitize']);

app.controller("programController", ['$sce', function(){
	this.navigation = [
		"Home", "Programs", "About"
	];

	this.data = [
		{
			programs: "1. A. Create a Java Class called student with the following details as variables in it.<br>(i) USN<br>(ii) Name<br>(iii) Branch<br>(iv)Phone.<br> Write a Java Program to create n student objects and print the USN, Name, Branch and Phone of these object with suitable headings",
		},
		{
			programs: "1. B. Write a Java Program to implement Stack using Arrays. Write push(), pop() and display() method to demonstarte its working.",
			images: "http://warshout.com/images/desk1.jpg"
		},
		{
			programs: "2. A. Design a super class called staff with details as staffid, name, phone, salary. Extend this class by writing three sublasses namely teaching (domain, publications). technical (skills), and contract(period). Write a Java program to read and display atleast three staff objects of all three categories.",
			images: "http://jamdmedia.com/JAMD/media/jamdmedia/billboards/mac-gadgets-on-a-desk-16521.jpg"
		},
		{
			programs: "2. B. Write a java class called customer to store thier name and date_of_birth. The date_of_birth format should be dd/mm/yyyy. Write methods to read customer data as <name, dd/mm/yyyy> and display as <name, dd,mm,yyyy> using string tokenizer class conisidering the delimiter character as '/'",
			images: "https://www.mockupworld.co/wp-content/uploads/edd/2015/07/techandall-Apple-Family-mockup-Tech-ALL-%E2%80%93-PSD-Tech-News-and-other-resources-for-free.jpg"
		},
		{
			programs: "3. A. Write a Java Program to read two integers a and b. Compute a/b and print, when b is not zero. Raise an exception when b is equal to zero.",
			images: "http://www.astawerks.com/images/home-office-table-desk-1-office-desk-top-view-1920-x-1080.jpg"
		},
		{
			programs: "3. B. Write a Java Program that implements a multi-thread application that hashtree thread. First thread generates a random integer for every one second; Second thread computes the square of the number and prints; Third thread will print the value of cube of the number.",
			images: "http://emaudesign.com/wp-content/uploads/2015/12/minimalist-desk.jpg"
		},
		{
			programs: "4. Sort a given set of n integers element using QUICK sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of the time taken versus n on graph sheet. The elements can be read from file or can be generated using the random number generator. Demonstrate using java how the divide-and-conquer method works along with its time complexity and analysis: worst case, average case and best case."
		},
		{
			programs: "5. Sort a given set of n integers element using MERGE sort method and compute its time complexity. Run the program for varied values of n > 5000 and record the time taken to sort. Plot a graph of the time taken versus n on graph sheet. The elements can be read from file or can be generated using the random number generator. Demonstrate using java how the divide-and-conquer method works along with its time complexity and analysis: worst case, average case and best case."
		},
		{
			programs: "6. Implement in Java, the zero/one Knapsack problem using (a) Dyanamic programming method (b) greedy method."
		},
		{
			programs: "7. From a given vertex in a weighted connected graph, find shortest paths to other vertices using Dijkstra's algorithm. Write the program in Java."
		},
		{
			programs: "8. Find minimum cost spanning tree of a given undirected graph using (a) Kruskal's algorithm (b) Prim's algorithm. Implement the program in Java language."
		},
		{
			programs: "9. Write Java programs to (a) Implement All-Pairs shortest path problem using Floyd's algorithm. (b) Implement traveling sales person problem using dynamic programming."
		},
		{
			programs: "10. A. Design and Implement in Java to find a subset of a given set s = {s1, s2, s3,....., sn} of n positive integers whose sum is equal to a given positive integer d. For example, if s = {1,2,5,6,8} and d = 9, there are two solutions {1,2,6} and {1,8}. Disaply a suitable message, if the given problem instance doesn't have a solution."
		},
		{
			programs: "10. B. Design and Implement the presence of Hamiltonian cycle in an undirected graph G of n vertices."
		}
	];
}]);