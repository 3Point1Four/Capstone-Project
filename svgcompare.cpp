#include <iostream>
#include <fstream>
#include "C:/Users/Pirann/.vscode/capstone proj/include/rapidxml.hpp"

bool compareSVG(rapidxml::xml_node<>* node1, rapidxml::xml_node<>* node2) {
    // Compare node attributes, elements, or other properties here
    // Recursively traverse child nodes if needed

    // Example: Compare node names
    return std::string(node1->name()) == std::string(node2->name());
}
// true
int main() {
    // Read SVG files
    std::ifstream svgFile1("file1.svg");
    std::ifstream svgFile2("file2.svg");

    if (!svgFile1.is_open() || !svgFile2.is_open()) {
        std::cerr << "Error opening files!" << std::endl;
        return 1;
    }

    // Parse SVG data using RapidXML
    rapidxml::xml_document<> doc1, doc2;
    std::string svgData1((std::istreambuf_iterator<char>(svgFile1)), std::istreambuf_iterator<char>());
    std::string svgData2((std::istreambuf_iterator<char>(svgFile2)), std::istreambuf_iterator<char>());

    doc1.parse<0>(&svgData1[0]);
    doc2.parse<0>(&svgData2[0]);

    // Compare SVG structures
    bool isEqual = compareSVG(doc1.first_node(), doc2.first_node());

    if (isEqual) {
        std::cout << "SVG files are equivalent." << std::endl;
    } else {
        std::cout << "SVG files are not equivalent." << std::endl;
    }

    return 0;
}
