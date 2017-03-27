(function(window, undefined) {
	window.PriorityQueue = function(compareFn) {
		var compare = compareFn || function(a, b) {
				return a < b;
			},
			heap = [],
			slice = Array.prototype.slice;

		// Initialize the priority queue with an array of items.
		this.init = function(items) {
			if (heap.length) heap = [];
			this.insert.apply(null, items);
			return this;
		};

		// Insert one or more items into the priority queue.
		this.insert = function() {
			slice.call(arguments, 0).forEach(function(item) {
				heap.push(item);
				float(heap.length - 1);
			});
			return this;
		};

		// Remove and return the next queue element.
		this.remove = function() {
			var head = null,
				last;
			if (heap.length) {
				head = heap[0];
				last = heap.length - 1;
				swap(0, last);
				heap.splice(last, 1);
				sink(0);
			}
			return head;
		};

		// Clear all items from the queue.
		this.clear = function() {
			heap = [];
			return this;
		};

		// Return the top item without modifying the queue.
		this.peek = function() {
			return heap[0];
		};

		// Return the number of items in the queue.
		this.size = function() {
			return heap.length;
		};

		// Return true if the queue is empty.
		this.empty = function() {
			return !heap.length;
		};

		// Sink an item from the top down to heap order.
		function sink(h) {
			var left = 2 * h + 1,
				right = 2 * h + 2,
				child = left;
			if (left < heap.length) {
				right < heap.length && compare(heap[right], heap[left]) && child++;
				if (compare(heap[child], heap[h])) {
					swap(h, child);
					sink(child);
				}
			}
		}

		// Float an item from the bottom up to heap order.
		function float(h) {
			var parent = Math.floor((h - 1) / 2);
			if (parent >= 0 && compare(heap[h], heap[parent])) {
				swap(h, parent);
				float(parent);
			}
		}

		// Swap two heap elements by index.
		function swap(i, j) {
			var tmp = heap[i];
			heap[i] = heap[j];
			heap[j] = tmp;
		}
	}
})(window)