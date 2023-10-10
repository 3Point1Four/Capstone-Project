#include <iostream>
#include <fstream>
#include <string>

int main() {
    // Specify the desired folder and filename for the SVG output
    std::string outputFilePath = "site\\assets\\output.svg";

    std::ifstream inputFile("site\\assets\\input.txt");

    if (!inputFile.is_open()) {
        std::cerr << "Error opening input file!" << std::endl;
        return 1;
    }

    std::string inputContent((std::istreambuf_iterator<char>(inputFile)),
                             std::istreambuf_iterator<char>());

    inputFile.close();

    if (inputContent.empty()) {
        std::cerr << "Input file is empty!" << std::endl;
        return 1;
    }

    // Open the output SVG file in the desired folder
    std::ofstream svgFile(outputFilePath);

    if (!svgFile.is_open()) {
        std::cerr << "Error opening output SVG file!" << std::endl;
        return 1;
    }

    // Write the SVG content with the entire input content to the output file
    svgFile << "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" << std::endl;
    svgFile << "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"500\" height=\"500\" id=\"imageToAnimate\">" << std::endl;
    svgFile << "  <rect x=\"0\" y=\"0\" width=\"500\" height=\"500\" fill=\"white\"/>" << std::endl;
    svgFile << "  <path d=\"" << inputContent << "\" stroke=\"black\" />" << std::endl;
    svgFile << "</svg>" << std::endl;

    svgFile.close();

    std::cout << "SVG file created successfully at: " << outputFilePath << std::endl;

    return 0;
}
