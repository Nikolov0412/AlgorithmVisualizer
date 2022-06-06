import React,{useState,useEffect} from "react";
import { Layout,Button,Menu, Select,Slider } from "antd";
import 'antd/dist/antd.css';
import './Sorting.css';
import Navigation from "../Global Components/Navbar";
import Foot from "../Global Components/Footer";

//Constansts
const { Header, Content, Footer,Sider} = Layout;
const { Option } = Select;
let ARRAYSIZE = 100


 const Sorting =()=>
{
  // States
  const [primaryArray, setPrimaryArray] = useState([])
  const [algorithm, setAlgorithm] = useState('Algorithm')
  const [sortSpeed, setSortSpeed] = useState(50)

  const randomizeArray = () => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = '#ff7f50'
    }
    let array = []
    for (let i = 0; i < ARRAYSIZE; i++) {
      array.push(randomVals(20, 400))
    }

    setPrimaryArray(array)
  }

  const randomVals = (min, max) => {
    let randomVal = Math.floor(Math.random() * (max - min + 1) + min)
    return randomVal
  }

  useEffect(() => {
    randomizeArray()
  }, [])


  const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds))
  }

  const finishedAnimation = async () => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = 'green'
      await sleep(sortSpeed)
    }

  }

  const handleSorting = () => {
    switch (algorithm) {
      case 'bubble-sort':
        bubbleSort()
        break
      case 'selection-sort':
        selectionSort()
        break
      case 'insertion-sort':
        insertionSort()
        break
      case 'merge-sort':
        mergeSort()
        break
      case 'quick-sort':
        quickSort()
        break
      case 'heap-sort':
        heapSort()
        break
      default:
        break
    }
  }
  const handleAlgorithms = (value) => {
    setAlgorithm(value);
   };

  const onChangeSpeed = (value) => {
    setSortSpeed(value)
  };
  const onChangeLength = (value) => {
    ARRAYSIZE=value;
  };

  const menuItems=
  [
    {
      key:0,
      label:"Speed",
    },
  {
    key:1,
    label:( <Slider defaultValue={50} onChange={onChangeSpeed}/>),
  },
  {
    key:2,
    label:"Array Length",
  },
  {
    key:3,
    label:( <Slider defaultValue={100} onChange={onChangeLength}/>),
  },
  {
    key:4,
    label:(<Select
      defaultValue="Algorithm"
      style={{
        width: 120,
      }}
      onChange={handleAlgorithms}
    >
      <Option value="bubble-sort">Bubble Sort</Option>
      <Option value="merge-sort">Merge Sort</Option>
      <Option value="selection-sort">Selection Sort</Option>
      <Option value="insertion-sort" >Insertion Sort</Option>
      <Option value="quick-sort">Quick Sort</Option>
      <Option value="heap-sort">Heap Sort</Option>
    </Select>),
  },
  {
    key:5,
    label:(<Button type='primary' onClick={randomizeArray}>New Array</Button>),
  },
  {
    key:6,
    label:(<Button type='primary'  onClick={handleSorting}  >Sort</Button>),
  },
  ];

  //Algorithms
  const bubbleSort = async () => {
    let currentArr = primaryArray
    let sorted = false
    setAlgorithm({ name: 'Bubble Sort', timeComplexity: 'O(n^2)' })

    while (!sorted) {
      sorted = true

      for (let i = 0; i < currentArr.length - 1; i++) {
        for (let j = 0; j < currentArr.length - i - 1; j++) {
          if (currentArr[j] > currentArr[j + 1]) {
            let temp = currentArr[j]
            currentArr[j] = currentArr[j + 1]
            currentArr[j + 1] = temp
            setPrimaryArray([...primaryArray, currentArr])

            let bar1 = document.getElementById(j).style
            let bar2 = document.getElementById(j + 1).style
            bar1.backgroundColor = '#DC143C'
            bar2.backgroundColor = '#6A5ACD'

            await sleep(sortSpeed)

            bar1.backgroundColor = '#FF7F50'
            bar2.backgroundColor = '#FF7F50'

            sorted = false
          }
        }
      }
      if (sorted) finishedAnimation()
    }
  }

  // Selection Sort
  const selectionSort = async () => {
    let currentArr = primaryArray
    let sorted = false
    setAlgorithm({ name: 'Selection Sort', timeComplexity: 'O(n^2)' })

    while (!sorted) {
      sorted = true

      for (let i = 0; i < currentArr.length - 1; i++) {
        for (let j = i + 1; j < currentArr.length; j++) {
          if (currentArr[i] > currentArr[j]) {
            let swap1 = currentArr[i]
            let swap2 = currentArr[j]
            currentArr[i] = swap2
            currentArr[j] = swap1
            setPrimaryArray([...primaryArray, currentArr])

            let bar1 = document.getElementById(i).style
            let bar2 = document.getElementById(j).style
            bar1.backgroundColor = '#DC143C'
            bar2.backgroundColor = '#6A5ACD'

            await sleep(sortSpeed)

            bar1.backgroundColor = '#FF7F50'
            bar2.backgroundColor = '#FF7F50'

            sorted = false
          }
        }
      }
      if (sorted) finishedAnimation()
    }
  }

  // Insertion Sort
  const insertionSort = async () => {
    let currentArr = primaryArray
    let sorted = false
    setAlgorithm({ name: 'Insertion Sort', timeComplexity: 'O(n^2)' })

    while (!sorted) {
      sorted = true

      for (let i = 1; i < currentArr.length; i++) {
        let current = currentArr[i]
        let j = i - 1
        while (j >= 0 && currentArr[j] > current) {
          currentArr[j + 1] = currentArr[j]
          setPrimaryArray([...primaryArray, currentArr])

          let bar1 = document.getElementById(j + 1).style
          let bar2 = document.getElementById(j).style
          bar1.backgroundColor = '#DC143C'
          bar2.backgroundColor = '#6A5ACD'

          await sleep(sortSpeed)

          bar1.backgroundColor = '#FF7F50'
          bar2.backgroundColor = '#FF7F50'

          j--
          sorted = false
        }
        currentArr[j + 1] = current
        setPrimaryArray([...primaryArray, currentArr])
      }
      if (sorted) finishedAnimation()
    }
  }

  // Merge Sort
  const mergeSort = async () => {
    let currentArr = primaryArray
    setAlgorithm({ name: 'Merge Sort', timeComplexity: 'O(n log(n))' })

    await sort(currentArr, 0, currentArr.length - 1)
    finishedAnimation()
  }

  const sort = async (arr, low, high) => {
    if (low < high) {
      let mid = Math.floor((low + high) / 2)
      await sort(arr, low, mid)
      await sort(arr, mid + 1, high)
      await merge(arr, low, mid, high)
    }
  }

  const merge = async (arr, low, mid, high) => {
    let i = low
    let j = mid + 1
    let k = 0
    let tempArr = []

    while (i <= mid && j <= high) {
      if (arr[i] < arr[j]) {
        tempArr[k] = arr[i]
        i++
        k++
      } else {
        tempArr[k] = arr[j]
        j++
        k++
      }
      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(sortSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'

    }

    while (i <= mid) {
      tempArr[k] = arr[i]

      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(sortSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'


      i++
      k++
    }

    while (j <= high) {
      tempArr[k] = arr[j]

      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(sortSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'



      j++
      k++
    }

    for (let i = low; i <= high; i++) {
      arr[i] = tempArr[i - low]
      setPrimaryArray([...primaryArray, arr])
    }
  }

  // Quick Sort
  const quickSort = async () => {
    setAlgorithm({ name: 'Quick Sort', timeComplexity: 'O(n log(n))' })
    let currentArr = primaryArray

    await sorts(currentArr, 0, currentArr.length - 1)
    finishedAnimation()
  }

  const sorts = async (arr, left, right) => {
    if (left < right) {
      let partitionIndex = partition(arr, left, right)

      setPrimaryArray([...primaryArray, arr])
      await sleep(sortSpeed)
      await sorts(arr, left, partitionIndex - 1)
      await sorts(arr, partitionIndex + 1, right)
    }
  }

  const partition = (arr, left, right) => {
    let pivot = arr[right]
    let i = left - 1
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

        let bar1 = document.getElementById(i).style
        let bar2 = document.getElementById(j).style
        bar1.backgroundColor = '#DC143C'
        bar2.backgroundColor = '#6A5ACD'

        setTimeout(() => {
          bar1.backgroundColor = '#ff7f50'
          bar2.backgroundColor = '#ff7f50'
        }, 200)

        setPrimaryArray([...primaryArray, arr])
      }
    }

    let temp = arr[i + 1]
    arr[i + 1] = arr[right]
    arr[right] = temp

    return i + 1
  }

  // Heap Sort
  const heapSort = async () => {
    let arr = primaryArray
    let length = arr.length
    let index = Math.floor(length / 2 - 1)
    let lastChild = length - 1

    setAlgorithm({ name: 'Heap Sort', timeComplexity: 'O(n log(n))' })

    while (index >= 0) {
      await heapify(arr, length, index)
      index--

      setPrimaryArray([...primaryArray, arr])

      if (index >= 0) {
        let bar1 = document.getElementById(index).style
        let bar2 = document.getElementById(index + 1).style
        bar1.backgroundColor = '#DC143C'
        bar2.backgroundColor = '#6A5ACD'

        await sleep(sortSpeed)


        bar1.backgroundColor = '#FF7F50'
        bar2.backgroundColor = '#FF7F50'
      } else {
        await sleep(sortSpeed)
      }
    }

    while (lastChild >= 0) {
      let swap1 = arr[0]
      let swap2 = arr[lastChild]

      arr[0] = swap2
      arr[lastChild] = swap1
      await heapify(arr, lastChild, 0)
      lastChild--

      setPrimaryArray([...primaryArray, arr])

      if (index >= 0) {
        let bar1 = document.getElementById(lastChild).style
        let bar2 = document.getElementById(0).style
        bar1.backgroundColor = '#DC143C'
        bar2.backgroundColor = '#6A5ACD'

        bar1.backgroundColor = '#FF7F50'
        bar2.backgroundColor = '#FF7F50'
      } else {
        await sleep(sortSpeed)
      }
    }

    finishedAnimation()
  }

  const heapify = async (arr, length, index) => {
    let largest = index
    let leftNode = index * 2 + 1
    let rightNode = leftNode + 1

    if (arr[leftNode] > arr[largest] && leftNode < length) {
      largest = leftNode
    }

    if (arr[rightNode] > arr[largest] && rightNode < length) {
      largest = rightNode
    }

    if (largest !== index) {
      let swap1 = arr[index]
      let swap2 = arr[largest]
      arr[index] = swap2
      arr[largest] = swap1

      let bar1 = document.getElementById(index).style
      let bar2 = document.getElementById(largest).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(sortSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'


      await heapify(arr, length, largest)
    }

    return arr
  }


    return(

      <Layout>
      <Header >
          <Navigation default='/sorting'/>
      </Header>
      <Layout>
        <Sider width={200} style={{backgroundColor:'#001529'}}>
              <Menu items={menuItems} theme='dark' style={{paddingTop:50}}>

              </Menu>
        </Sider>
        <Layout

        >
          <Content
            className="site-layout-background"
            style={{
              padding: 0,
              margin: 0,
              minHeight: 280,
            }}
          >
         <div>
      <div className='header'>
      </div>
      <div className='sortingBars'>
        {primaryArray &&
          primaryArray.map((val, key) => {
            return (
              <div
                className='bars'
                id={key}
                key={key}
                style={{ height: val }}
              ></div>
            )
          })}
      </div>
    </div>

          </Content>
        </Layout>

      </Layout>
      <Footer style={{backgroundColor:'#001529'}}>
          <Foot/>
      </Footer>
    </Layout>
        )
    }

    export default Sorting
