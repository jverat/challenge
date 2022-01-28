package game_01

import (
	"fmt"
	"math"
)

func solution(m []int, n int) ([2]int, error) {

	myMap := make(map[int]int)
	for _, number := range m {
		myMap[number]++
	}
	if n%2 == 0 {
		halves, halvesExists := myMap[n/2]
		if halvesExists && halves >= 2 {
			return [2]int{n / 2, n / 2}, nil
		}
	}
	for key := range myMap {
		_, exists := myMap[int(math.Abs(float64(n-key)))]
		if exists {
			return [2]int{key, n - key}, nil
		}
	}
	return [2]int{}, fmt.Errorf("sum doesn't exist in array")
}
