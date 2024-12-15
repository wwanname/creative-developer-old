/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect } from "react"

export default function Home() {

  useEffect(() => {
    const blockContainer = document.getElementById("blocks")
    const blockSize = 50
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const numCols = Math.ceil(screenWidth/blockSize)
    const numRows = Math.ceil(screenHeight/blockSize)
    const numBlocks =numCols * numRows

    const createBlock = () => {
      for (let i = 0; i < numBlocks; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        block.dataset.index = i
        blockContainer.appendChild(block)
        block.addEventListener("mouseenter", function() {
          hightlightRandomNeighbors.call(this)
        })
      }
    }

    const hightlightRandomNeighbors = function() {
      const index = parseInt(this.dataset.index)
      const neighbors = [
        index - 1,
        index + 1,
        index - numCols,
        index + numCols,
        index - numCols - 1,
        index - numCols + 1,
        index + numCols - 1,
        index + numCols + 1
      ].filter((i) =>
        i >= 0 &&
        i < numBlocks &&
        Math.abs((index % numCols) - (i % numCols)) <= 1 &&
        Math.abs(Math.floor(index / numCols) - Math.floor(i / numCols)) <= 1
      )

    this.classList.add("highlight")
    setTimeout(() => {
      this.classList.remove("highlight")
    }, 500)

    shuffleArray(neighbors)
      .slice(0, 1)
      .forEach((nIndex) => {
        const neighbor = blockContainer.children[nIndex];
        if (neighbor) {
          neighbor.classList.add("highlight")
          setTimeout(() => {
            neighbor.classList.remove("highlight")
          }, 500)
        }
      })}

      const shuffleArray = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

      createBlock()
  }, [])

  return (
    <>
    <div className="blocks-container">
      <div id="blocks"></div>
    </div>

      <div className="content">
        <nav>
          <a href="#">wwan</a>
          <a href="#">gay</a>
        </nav>

        <div className="images">
          <div className="col">
            <div className="img">
              <img src="./1.jpg" alt="img1" />
            </div>
            <div className="img">
              <img src="./2.jpg" alt="img2" />
            </div>
            <div className="img">
              <img src="./3.jpg" alt="img3" />
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src="./4.jpg" alt="img4" />
            </div>
            <div className="img">
              <img src="./5.jpg" alt="img5" />
            </div>
            <div className="img">
              <img src="./6.jpg" alt="img6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
